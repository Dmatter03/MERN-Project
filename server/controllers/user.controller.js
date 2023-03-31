const { User } = require('../models/model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            response
                .cookie("usertoken", userToken, { httpOnly: true })
                .json({ msg: "success", user: user });
        })
        .catch((dbError) => {
            console.log('Something went wrong')
            response.status(400).json(dbError)
        })
}

module.exports.signal =(request, response)=>{
    User.find()
        .then(users=>response.cookie("test","test", {httpOnly:true}).json({users: users}))
        .catch(error=>response.json(error))
}

module.exports.loginUser = async (request, response) => {
    const user = await User.findOne({ email: request.body.email });
    if (user === null) {
        return response.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(request.body.password, user.password);
    if (!correctPassword) {
        return response.sendStatus(400);
    }
    const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    response
        .cookie("usertoken", userToken, { httpOnly: true })
        .json({ msg: "success!" });
}
module.exports.logoutUser = (request, response) =>{
    response.clearCookie('usertoken')
    response.sendStatus(200)
}

module.exports.getUser = (request, response) =>{
    const decodedJwt = jwt.decode(request.cookies.usertoken, {complete: true})
    User.findOne({_id: decodedJwt.payload.id})
        .then(oneUser=>response.json(oneUser))
        .catch(error=>response.status(500).json(error))
}
