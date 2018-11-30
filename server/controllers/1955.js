var Person  = require('../models/person').person
console.log('controllers file')

module.exports = {
    index : function(req, res){
        var all;
        Person.find({}, function(err, people){
            if (err){
                res.send("Something went wrong")
            }
            else {
                all = people
                res.json({message : 'Success', data : all})
            }
        })
    },

    new : function(req, res){
        var person = new Person({name : req.params.name, createdAt : new Date(), updatedAt : new Date()})
        person.save(function(err){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({message : 'Success', new_person : person})
            }
        })
    },

    delete : function(req, res){
        Person.remove({name : req.params.name}, function(err){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.send("Successfully deleted a person")
            }
        })
    },

    getPerson : function(req, res){
        Person.findOne({name : req.params.name}, function(err, person){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({message : 'Success', data : person})
            }
        })
    }
}