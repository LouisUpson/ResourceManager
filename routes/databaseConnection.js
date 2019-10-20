const mysql = require('mysql');

function getConnection() {
    return mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'resourceManager'
    });
}

module.exports = getConnection();