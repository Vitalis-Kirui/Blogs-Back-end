const express = require('express');

const app = express();

// Static middleware
app.use(express.static('assets'));

// Listening to requests
app.listen(3000);

// Listening to home page
app.get('/home', (req, res) =>{
    res.sendFile('./views/home.html', {root : __dirname})
});

// Listening to about page
app.get('/about-us', (req, res) =>{
    res.sendFile('./views/about.html', {root : __dirname});
});

// Redirection
app.get('/about', (req, res) =>{
    res.redirect('/about-us');
});

app.get('/', (req, res) =>{
    res.redirect('/home');
});

// use function for error 404
app.use((req, res) =>{
    res.status(404).sendFile('./views/error404.html', {root : __dirname});
});