const Controller = require('../controllers/controller')


module.exports = (app) => {
    app.get('/api/posts', Controller.getAll)
    app.get('/api/posts/:id', Controller.getOne)
    app.post('/api/posts', Controller.create)
    app.put('/api/posts/:id', Controller.updateOne)
    app.delete('/api/posts/:id', Controller.deleteOne)
}   