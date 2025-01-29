const express = require('express')
const app = express()
var mysql = require('mysql')

var db = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : ''
});


app.use(express.json());


function generatePassword(){
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!#&$';
    let password = '';
    for(let i = 0; i < 12; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

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
    const { username } = req.body;
    if(!username){
        return res.status(400).json({message: 'Username name is required!'})
    }
    const password = generatePassword();
    const sql = `CREATE USER '${username}'@'localhost' IDENTIFIED BY '${password}'`;
    db.query(sql, (err, results) =>{
        if (err) {
            res.status(500).json({message: err});
        }
        res.status(200).json({message: 'User created succesfully!', data: results, password})
    });
});

app.post('/grant-priveleges', (req, res) => {
    
});

app.listen(3000, ()=>{
    console.log(`server: https://localhost:3000`)
});