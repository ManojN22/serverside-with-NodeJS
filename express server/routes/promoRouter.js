const express = require('express');
const bodyParser =require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send all the promotions to you!');

})
.post((req,res,next)=>{
res.end('will add the promotions:'+req.body.name+' with detail '+req.body.description);

})
.put((req,res,next)=>{
	res.statusCode=403;
res.end('Put operation not supported no /promotions');

})
.delete((req,res,next)=>{
res.end('deleting all the  promotions!');

});
promoRouter.route('/:promoId').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send '+req.params.promoId+'promotions to you!');

})
.post((req,res,next)=>{
res.statusCode=403;
res.end('Post operation 403 not supported no /promotions/'+req.params.promoId);
})
.put((req,res,next)=>{
	res.write('UpDating the dish:'+req.params.promoId+'\n');
	res.end('will update the dish: '+req.body.name+'with deatils: '+req.body.description);

})
.delete((req,res,next)=>{
res.end('deleting '+req.params.promoId+' dish!');

});
module.exports= promoRouter;


