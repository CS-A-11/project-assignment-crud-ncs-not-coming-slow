var mongoose = require('mongoose');


var Following = new mongoose.Schema({
    UserName: String,
    UserDp: String,
    UserId: String,
    Posts: Number,
    Follower: Number,
    Following: Number
})

var FollowingSchema= new mongoose.Schema({
    Followings:[Following]
})