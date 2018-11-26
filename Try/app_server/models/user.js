var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    Name: String,
    Followers: {
        type: Number,
        "default": 0
    },
    Followings: {
        type: Number,
        "default": 0
    },
    Userdp: String,
    Email: String,
    Password: String,
    Posts: {
        type: Number,
        "default": 0
    }
});

module.exports = mongoose.model('User',UserSchema);