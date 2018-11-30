var controller = require('../controllers/1955')
console.log('routes file')

module.exports = function(app) {
    app.get('/', function(req, res){
        controller.index(req, res)
    })

    app.get('/new/:name', function(req, res){
        controller.new(req, res)
    })

    app.get('/remove/:name', function(req, res){
        controller.delete(req, res)
    })

    app.get('/:name', function(req, res){
        controller.getPerson(req, res)
    })
}