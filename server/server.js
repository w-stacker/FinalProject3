const express = require('express');
const app = express();
const mysql = require('mysql')

const PORT = 4000

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'playgames_db'
});

connection.connect(err => {
    if(err) {
        return err;
    };
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});