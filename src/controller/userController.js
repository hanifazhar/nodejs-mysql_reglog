const bcrypt = require('bcrypt');
const { connection } = require('../database/database.js');

const userController = {
    register: async (req, res) => {
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password;

        const hashPassword = await bcrypt.hash(password, 10);
        console.log("Hash password saat registrasi:", hashPassword);

        connection.query(
            `INSERT INTO users (fullName, username, password) VALUES(?, ?, ?)`,
            [fullname, username, hashPassword],
            (err, result) => {
                if (err) throw err;
                res.redirect('/login');
            }
        );
    },

    login: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        connection.query(
            'SELECT password FROM users WHERE username = ?',
            [username],
            async (err, result) => {
                if (err) return res.status(500).send(err.message);
    
                if (result.length > 0) {
                    const hashPassword = result[0].password;
    
                    try {
                        console.log("Password dari input:", password);
                        console.log("Hash password dari DB:", hashPassword);
    
                        const verifyPass = await bcrypt.compare(password, hashPassword);
                        console.log("Hasil verifikasi password:", verifyPass);
    
                        if (verifyPass) {
                            req.session.login = true;
                            return res.redirect('/admin'); // Pastikan 'return' ini mencegah kode selanjutnya dijalankan
                        } else {
                            return res.status(401).send('Login gagal: password salah.');
                        }
                    } catch (error) {
                        console.error("Error saat verifikasi password:", error); // Tambahkan log untuk melihat error
                        return res.status(500).send('Error verifying password');
                    }
                } else {
                    return res.status(401).send('Login gagal: username tidak ditemukan.');
                }
            }
        );
    },    

    logout: (req, res) => {
        req.session.destroy((err)=>{
            if(err) console.log(err);
            res.redirect('/login')
        })
    }
};

module.exports = { userController };
