const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Gyar = db.model('Gyar', {
    sorgyar: String,
    partnerek: String,
    keszlet: Number,
    szallitok: [String],
    sorok: [String],

    _assignedto: {
        type: Schema.Types.ObjectId,
        ref: 'Sor'
      }
});

module.exports = Gyar;