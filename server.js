const express = require('express')
const app = express()
var mysql = require('mysql')

var db = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : ''
});


app.use(express.json());

app.post('/create-database', (req, res) => {
    const { dbname } = req.body;
    if(!dbname){
        return res.status(400).json({message: 'Database name is required!'})
    }

    const sql = `CREATE DATABASE \`${dbname}\``
    db.query(sql, (err, results) =>{
        if (err) {
            res.status(500).json({message: err});
        }
        res.status(200).json({message: 'Database created succesfully!', data: results})
    });
});

app.post('/create-user', (req, res) => {
    
});

app.post('/create-priveleges', (req, res) => {
    
});

app.listen(3000, ()=>{
    console.log(`server: https://localhost:3000`)
});