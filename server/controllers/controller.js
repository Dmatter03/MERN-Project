const { Post } = require('../models/post.model');


module.exports.getAll = (req, res) => {
    Post.find()
    .then((dbResponse) => {
        res.json(dbResponse);
    })
    .catch((dbError) => {
        res.status(400).json('This is my Get all route', dbError)
    })
}


module.exports.create = (req, res) => {

    Post.create(req.body)
    .then((dbResponse) => {
        res.json(dbResponse)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}

module.exports.getOne = (req, res) => {
    Post.findOne({ _id: req.params.id })
    .then((dbResponse) => {
        res.json(dbResponse)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}


module.exports.updateOne = (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, req.body, { 
        new: true,
        runValidators: true,
    })
    .then((dbResponse) => {
        res.json(dbResponse)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}

module.exports.deleteOne = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
    .then((dbResponse) => {
        res.json(dbResponse)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}





