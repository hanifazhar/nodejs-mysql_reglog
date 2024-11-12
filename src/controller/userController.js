const bcrypt = require('bcrypt');
const { connection } = require('../database/database.js');

const UserController = {

    register: async (req,res)=>{
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = await bcrypt.hash(req.body.password,10);

        connection.query(
            `INSERT INTO users (id, fullName, username, password) VALUES(NULL, '${fullname}','${username}','${password}')`,(err,result)=>{
                if(err)throw err

                console.log("Data berhasil dibuat");
                res.redirect('/login')
            }
        )
    },

    login: (req,res)=>{
        //logika login
    },

    logout: (req,res)=>{
        //logika logout
    }

}

module.exports = {UserController}