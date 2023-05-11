const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/cqkfi2', {useNewUrlParser : true});

module.exports = mongoose;