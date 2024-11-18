const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 3000

var connection = mysql.createConnection({
  host     : process.env.DB_HOSTNAME,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  port     : process.env.DB_PORT
});
app.get("/db", (req, res) => {

connection.connect(function(err) {
  if (err) {
	  res.send("db connection failed")
    console.error('Database connection failed: ' + err.stack);
    return;
 }
	res.send("db connection successful");
  console.log('Connected to database.');

connection.end();
});})

const redis = require('redis');
const client = redis.createClient({
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
});

client.on('error', err => {
    console.log('Error ' + err);
});

app.get('/redis', (req, res) => {

  client.set('foo','bar', (error, rep)=> {                
    if(error){     
console.log(error);
      res.send("redis connection failed");                             
      return;                
  }                 
  if(rep){                          //JSON objects need to be parsed after reading from redis, since it is stringified before being stored into cache                      
 console.log(rep);
  res.send("redis is successfuly connected");                 
 }}) 
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
