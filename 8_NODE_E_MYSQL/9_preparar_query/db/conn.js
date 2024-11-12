const mysql = require('mysql')

const pool = mysql.createPool({
    connetionLimit: 10,
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'nodemysql2',
})

module.exports = pool