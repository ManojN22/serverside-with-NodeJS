const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const Fs = require("fs");
const path = require("path");


var Storage = multer.diskStorage({

    destination: function(req, file, callback) {
    	var fs = require('fs');
		var dir = "./public/images/"+file.originalname.split(" ")[0];

		if (!fs.existsSync(dir))
		{
    		fs.mkdirSync(dir);
		}
        callback(null, dir);
    },

    filename: function(req, file, callback) {
        callback(null,  file.originalname.split(" ")[1]+".png");
    }
});

var upload = multer({
    storage: Storage
}).single('file');

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());


uploadRouter.route('/')
.get( (req, res, next) => {
  
})
.post((req, res,next) =>{
    console.log("upload ...");

    upload(req, res, (err) =>{
        if(err){
            console.log(err);
            res.send("Failed")
        }
        else{
            console.log(req.file);
            res.send("Uploaded ...");
        }
    });
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /imageUpload');
})
.delete( (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /imageUpload');
});

module.exports = uploadRouter;
