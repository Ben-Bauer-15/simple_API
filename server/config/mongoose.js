var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955');
mongoose.Promise = global.Promise;
console.log('mongo file')

module.exports = {
    mongo : mongoose
}