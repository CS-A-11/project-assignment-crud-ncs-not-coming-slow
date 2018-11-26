var mongoose = require('mongoose');
let Product = require('../models/product');
var User = require('../models/user');
var fullUrl = require('../absolute-url');


module.exports.load = function (req, res) {

  User.findById(req.session.uid, function (err, user) {
    user.Userdp = fullUrl(req, user.Userdp);

    Product.find({UserId:req.session.uid},function(err,products){
      
      // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
      res.render('profile', {
        User: user,
        Myproducts: products
    })
  })    
  });
}




module.exports.saved=function(req,res)
{


  User.findById(req.session.uid, function (err, user) {
    user.Userdp = fullUrl(req, user.Userdp);

    Product.find({SavedBy:req.session.uid},function(err,products){
      // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
      res.render('profile', {
        User: user,
        Myproducts: products
    })
  })    
  });
}

module.exports.uploadProduct = function (req, res) {
  const Title = req.body.product_title;
  const Description = req.body.Description;
  const Quantity = req.body.Quantity;
  let ForSale = req.body.ForSale;
  const Price = req.body.Price;
  const Category = req.body.Category;


  if (ForSale == 'on') {
    ForSale = 1;
  } else {
    ForSale = 0;

  }

  let newProduct = new Product({
    Title: Title,
    Description: Description,
    ForSale: ForSale,
    Quantity: Quantity,
    Price: Price,
    ProductDp: 'images/Uploads/Products/' + req.file.filename,
    Category: Category,
    UserId:req.session.uid
  });

  newProduct.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.redirect('/profile');

    }
  });
};

module.exports.followers=function(req,res)
{

  User.findById(req.session.uid, function (err, user) {
    user.Userdp = fullUrl(req, user.Userdp);

    Product.find({UserId:req.session.uid},function(err,products){
      res.render('follower', {
        User: user,
        Person: [{
      name: 'A',
      followers: '100',
      followin: '5',
      posts: '3',
      dp: 'https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg'
    }, {
      name: 'B',
      followers: '10',
      followin: '2',
      posts: '10',
      dp: 'https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg'
    }, {
      name: 'C',
      followers: '50',
      followin: '50',
      posts: '1',
      dp: 'https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg'
    }, {
      name: 'D',
      followers: '0',
      followin: '0',
      posts: '1',
      dp: 'http://nabeel.co.in/files/bootsnipp/gallery/3.jpg'
    }, {
      name: 'E',
      followers: '0',
      followin: '0',
      posts: '1',
      dp: 'http://nabeel.co.in/files/bootsnipp/gallery/4.jpg'
    }]})
})})};

module.exports.followings=function(req,res)
{

  User.findById(req.session.uid, function (err, user) {
    user.Userdp = fullUrl(req, user.Userdp);

    Product.find({UserId:req.session.uid},function(err,products){
      res.render('follower', {
        User: user,
        Person: [{
      name: 'A',
      followers: '100',
      followin: '5',
      posts: '3',
      dp: 'https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg'
    }, {
      name: 'B',
      followers: '10',
      followin: '2',
      posts: '10',
      dp: 'https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg'
    } ]})
})})};