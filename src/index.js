const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { viewController } = require('./controller/viewController');
const { userController } = require('./controller/userController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: "SECRET-KEY",
    resave: false,
    saveUninitialized: true
}))

//ROUTE
app.get('/',authMiddleware.public,ViewController.homePage); 
app.get('/login',authMiddleware.public,ViewController.loginPage);
app.get('/register',authMiddleware.public,ViewController.registerPage);
app.get('/admin',authMiddleware.authLogin,ViewController.adminPage);

app.post('/login',authMiddleware.public,UserController.login);
app.post('/register',authMiddleware.public,UserController.register);
app.get('/logout',authMiddleware.authLogin,UserController.logout);

app.listen(3000, () => {
    console.log("Server berjalan di server : 3000")
})