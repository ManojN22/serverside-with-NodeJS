const express = require('express');
const http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dishRouter =require('./routes/dishRouter');
const promoRouter =require('./routes/promoRouter');
const leaderRouter =require('./routes/leaderRouter');
const port = 3000;
const app = express(); 
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><body><h1>this is an express server</h1></body></html>');
});
const server = http.createServer(app);
server.listen(port,hostname,()=>{
console.log(`server running at http://${hostname}:${port}`);
});