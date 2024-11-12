const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'login-register'
})

connection.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
    } else {
        console.log('Koneksi ke database berhasil');
    }
});

module.exports = { connection }