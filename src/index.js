const express = require('express');
const app = express();

app.use('views engine', 'ejs');

//ROUTE
app.get('/', (req, res) => {
    res.send("Halaman Home")
})
app.get('/login', (req, res) => {
    res.send("Halaman Login")
})
app.post('/login', (req, res) => {
    res.send("User Login")
})
app.get('/register', (req, res) => {
    res.send("Halaman Register")
})
app.post('/register', (req, res) => {
    res.send("User Register")
})
app.get('/logout', (req, res) => {
    res.send("Logout User")
})
app.get('/admin', (req, res) => {
    res.send("Halaman bagi yang sudah login")
})

app.listen(3000, () => {
    console.log("Server berjalan di server : 3000")
})