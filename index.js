var express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

var app = express()

app.use(cors())

app.get('/Hello_World', function(req, res, next) {
    res.json({msg: 'Hello_World'})
})

app.get('/attractions', function(req, res, next){
    pool.query("SELECT * FROM attractions", function(err, rows, field){
        console.log(err)
        res.json(rows)
    })
})

app.listen(5000, function() {
    console.log('web server listening on port 5000')
})