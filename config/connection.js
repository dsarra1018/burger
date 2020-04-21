// Dependencies
const mysql = require('mysql');

// MySQL DB Connection Information
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// Initiate MySQL Connection
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});