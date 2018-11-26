var mongoose = require('mongoose');


var Follower = new mongoose.Schema({
    UserName: String,
    UserDp: String,
    UserId: String,
    Posts: Number,
    Follower: Number,
    Following: Number
})

var FollowerSchema= new mongoose.Schema({
    Followers:[Follower]
})