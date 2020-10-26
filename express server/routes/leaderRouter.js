const express = require('express');
const bodyParser =require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send all the leader to you!');

})
.post((req,res,next)=>{
res.end('will add the leader:'+req.body.name+'with detail '+req.body.description);

})
.put((req,res,next)=>{
	res.statusCode=403;
res.end('Put operation not supported no /leaders');

})
.delete((req,res,next)=>{
res.end('deleting all the leaders!');

});
leaderRouter.route('/:leaderId').all((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next)=>{
res.end('will send '+req.params.leaderId+' to you!');

})
.post((req,res,next)=>{
res.statusCode=403;
res.end('Post operation 403 not supported no /leader/'+req.params.leaderId);
})
.put((req,res,next)=>{
	res.write('UpDating the leader:'+req.params.leaderId+'\n');
	res.end('will update the leader: '+req.body.name+'with deatils: '+req.body.description);

})
.delete((req,res,next)=>{
res.end('deleting '+req.params.leaderId+' leader!');

});
module.exports= leaderRouter;


