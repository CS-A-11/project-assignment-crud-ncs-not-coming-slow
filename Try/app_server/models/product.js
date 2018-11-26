var mongoose = require('mongoose');


var Like = new mongoose.Schema({
    UserName: String,
    UserDp: String,
    UserId: String
});


var Comment = new mongoose.Schema({
    UserName: String,
    UserDp: String,
    UserId: String,
    Msg: String
});


var ProductSchema = new mongoose.Schema({
    SavedBy : [{
        type: String
    }],
    UserName: String,
    UserDp: String,
    UserId: String,
    ProductDp: String,
    Title: String,
    Category: String,
    ForSale: Boolean,
    Price: {
        type: Number,
        min: 0
    },
    Description: String,
    Quantity: {
        type: Number,
        min: 0
    },
    Likes: [Like],
    Comments: [Comment]
})

module.exports = mongoose.model('Product', ProductSchema);