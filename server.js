const express = require('express');
const ejs = require('ejs');
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/charts', (req, res) => {
    res.render('charts')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/password', (req, res) => {
    res.render('password')
})
app.get('/tables', (req, res) => {
    res.render('tables')
})
app.get('/layout-static', (req, res) => {
    res.render('layout-static')
})
app.get('/layout-sidenav-light', (req, res) => {
    res.render('layout-sidenav-light')
})
app.get('/401', (req, res) => {
    res.render('401')
})
app.get('/404', (req, res) => {
    res.render('404')
})
app.get('/500', (req, res) => {
    res.render('500')
})


app.listen(port, () => {
    console.log(`Server successfully running @ ${port}`);
})