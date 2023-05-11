var express = require('express');
var session = require('express-session');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
require('./route/route')(app);

app.use(
    session({
      secret: 'secret', 
      resave: true,
      saveUninitialized: true
    })
);

app.get('/', (req, res) => {
    const userData = req.session.User;
    req.session.User = { email: 'xy@xyz.com', password: "xyz" };
  
    // Itt kellene beállítani a User tulajdonságot a munkamenetben
    req.session.User = { ...req.session.User, User: {} };
});

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});
/*
const SorModel = require('./models/sor');
const mongoose = require('mongoose');

let egySor = new SorModel();
egySor.nev = "Dreher";
egySor.sorgyar = "Dreher Sörgyárak Kft.";
egySor.keszlet = 10000;

let output;
(async() =>{
    output = await egySor.save();
})
console.log(output);*/