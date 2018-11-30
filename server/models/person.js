var mongoose = require('../config/mongoose').mongo
var PersonSchema = new mongoose.Schema({
    name: String,
    createdAt : Date,
    updatedAt : Date
})
mongoose.model('Person', PersonSchema); 
console.log('models file')

module.exports = {
    person : mongoose.model('Person') 
}