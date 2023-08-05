var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema);

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema);