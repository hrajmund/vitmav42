const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
  email: String,
  password: String,
});

module.exports = User;

/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  _assignedto: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
*/
