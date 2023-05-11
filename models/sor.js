const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Sor = db.model('Sor', {
    nev: String,
    sorgyar: String,
    keszlet: Number
});

module.exports = Sor;