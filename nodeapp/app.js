const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000
const host= process.env.HOST
const user= process.env.USERNAME
const password= process.env.PASSWORD
const database= process.env.DATABASE

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/', (req, res) => {
    res.send('Hello World from ITI 44')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
