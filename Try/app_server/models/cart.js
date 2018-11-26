var mongoose = require('mongoose');

var Product = new mongoose.Schema({
    Title: String,
    Description:String,
    ProductDp:String,
    Price:Number,
    Id:Number
})



var cart=new mongoose.Schema({
    Products:[Product]
})