const http = require('http');
const fs = require('fs');
const path =  require('path');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
console.log("request  "+req.url+" method "+ req.method);

if(req.method=='GET')
{
	var fileURL;
 if(req.url=='/') fileURL='/index.html';
 else fileURL=req.url;
 
 var filePath = path.resolve('./public'+fileURL);
 const fileExt= path.extname(filePath);
 if(fileExt== '.html')
 {
 	fs.exists(filePath,(exists) => {
          if(!exists)
          {
 	res.statusCode = 404;
 	res.setHeader('Content-Type','text/html');
 	res.end('<html><body><h1>ERROR 404 '+fileURL+'</h1><br><p>page not foud</p></body></html>');
 	return;
 	}
 	else
 	{
 		res.statusCode=200;
 		res.setHeader('Content-Type','text/html');
 		fs.createReadStream(filePath).pipe(res);
 			}
 	});
}
 
 else
 {
 	res.statusCode = 404;
 	res.setHeader('Content-Type','text/html');
 	res.end('<html><body><h1>ERROR 404 '+fileURL+'</h1><br><p>not html</p></body></html>');
 	return;
 }
}
else
{
	res.statusCode = 404;
 	res.setHeader('Content-Type','text/html');
 	res.end('<html><body><h1>ERROR 404 '+req.method+'</h1><br><p>not supported method</p></body></html>');
 	return;
}
});




server.listen(port,hostname,()=>{
console.log(`server running at http://${hostname}:${port}`);
});
