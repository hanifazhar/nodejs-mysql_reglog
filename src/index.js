const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { viewController } = require('./controller/viewController');
const { userController } = require('./controller/userController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//ROUTE
app.get('/', viewController.homePage)
app.get('/login', viewController.loginPage)
app.get('/register', viewController.registerPage)
app.get('/admin', viewController.adminPage)

app.get('/logout', (req, res) => {
    res.send("Logout User")
})
app.post('/login', (req, res) => {
    res.send("User Login")
})
app.post('/register', (req, res) => {
    res.send("User Register")
})

app.listen(3000, () => {
    console.log("Server berjalan di server : 3000")
})