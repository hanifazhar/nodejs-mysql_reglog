const { connection } = require('../database/database');
const bcrypt = require('bcrypt');

const userController = {
    register: async(req, res) => {
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = await bcrypt.hash(req.body.password, 10);

        connection.query(
            `INSERT INTO users (fullname, username, password) VALUES('${fullName}','${username}','${password}' )`, (err, result) => {
                if(err) throw err

                console.log("Data Berhasil Ditambahkan");
                res.redirect('/login')
            }
        )
    },
    login: (req, res) => {
        
    }
}

module.exports = { userController }