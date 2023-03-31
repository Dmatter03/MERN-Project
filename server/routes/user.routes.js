const UserController = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config')


module.exports = (app) => {
    app.get(`/api/allUsers`, authenticate, UserController.signal)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.loginUser)
    app.get(`/api/logout`, UserController.logoutUser)
    app.get(`/api/getUser`, UserController.getUser)
}