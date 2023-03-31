const mongoose = require('mongoose')




const PostSchema = mongoose.Schema ({
        users: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        message: {
            type: String,
        },
        like: {
            type: Number,
        },
    }, { timestamps: true });

    module.exports.Post = mongoose.model('Post', PostSchema);