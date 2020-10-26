const MongoClient = require('mongodb').MongoClient;
const dboper =require('./operations');
const assert =require('assert');
const url = 'mongodb://localhost:27017/';
const dbname ='conFusion';
MongoClient.connect(url).then((err,client) => {
assert.equal(err,null);
console.log('connected correctly');
const db = client.db(dbname);
dboper.insertDocument(db,{name : "pizza ma",description:"its a pizza man"},'dishes').then((result) => {

console.log('inserted doc:\n',result.ops);
return dboper.findDocument(db,'dishes')}).then((docs) =>{

console.log('found Document:\n',docs);
return dboper.updateDocument(db,{name:'pizza ma'},{description:'updateDocument'},'dishes')}).then((result)=>{

	console.log('updated Document:\n', result.result);
	return dboper.findDocument(db,'dishes')}).then((docs) =>{

		console.log('found Document:\n',docs);
		return db.dropCollection('dishes')})
	.then((result) =>{

console.log('dropped ',result);
client.close();
		}).catch((err)=>console.log(err));
	
})
.catch((err)=>console.log(err));
