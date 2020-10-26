const express = require('express');
const bodyParser =require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send all the dishes to you!');

})
.post((req,res,next)=>{
res.end('will add the dishes:'+req.body.name+'with detail '+req.body.description);

})
.put((req,res,next)=>{
	res.statusCode=403;
res.end('Put operation not supported no /dishes');

})
.delete((req,res,next)=>{
res.end('deleting all the dishes!');

});

dishRouter.route('/:dishId').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send '+req.params.dishId+' to you!');

})
.post((req,res,next)=>{
res.statusCode=403;
res.end('Post operation 403 not supported no /dishes/'+req.params.dishId);
})
.put((req,res,next)=>{
	res.write('UpDating the dish:'+req.params.dishId+'\n');
	res.end('will update the dish: '+req.body.name+'with deatils: '+req.body.description);

})
.delete((req,res,next)=>{
res.end('deleting '+req.params.dishId+' dish!');

});
module.exports= dishRouter;


