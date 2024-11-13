const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { viewController } = require('./controller/viewController');
const { userController } = require('./controller/userController');
const session = require('express-session');

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//ROUTE
app.get('/',viewController.homePage); 
app.get('/login',viewController.loginPage);
app.get('/register',viewController.registerPage);
app.get('/admin',viewController.adminPage);

app.post('/login',userController.login);
app.post('/register',userController.register);
app.get('/logout',userController.logout);

app.listen(3000, () => {
    console.log("Server berjalan di server : 3000")
})