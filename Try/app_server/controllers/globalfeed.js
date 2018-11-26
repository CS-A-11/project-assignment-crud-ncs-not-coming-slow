var mongoose = require('mongoose');
var fullUrl=require('../absolute-url');

let product = require('../models/product');



module.exports.load = function (req, res) {
  
  product.find({}, function (err, products) {
  
  // Makes relative URLs, absolute URLs
  products.map(function (product) {
    product.ProductDp = fullUrl(req, product.ProductDp);
    return product;
  });

    res.render('globalfeed', {
      products
    });
  });
  // res.render('globalfeed',{ products:[{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/4.jpg',userdp:'',description:'picture1'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/1.jpg',userdp:'',description:'picture1'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/2.jpg',userdp:'',description:'picture1'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/3.jpg',userdp:'',description:'picture1'}]});

}
module.exports.Sketches = function (req, res) {
  console.log("sketches");
  product.find({
    Category: 'Sketch'
  }, function (err, products) {

    console.log(products);
    // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
    res.render('globalfeed', {
      products
    });
  });
}





module.exports.Paintings = function (req, res) {
  console.log("Paintings");
  product.find({
    Category: 'Painting'
  }, function (err, products) {

    console.log(products);
    // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
    res.render('globalfeed', {
      products
    });
  });
}




module.exports.Handicraft = function (req, res) {
  console.log("Handicraft");
  product.find({
    Category: 'Handicraft'
  }, function (err, products) {

    console.log(products);
    // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
    res.render('globalfeed', {
      products
    });
  });
}



module.exports.Calligraphy = function (req, res) {
  console.log("Calligraphy");
  product.find({
    Category: 'Calligraphy'
  }, function (err, products) {

    console.log(products);
    // Makes relative URLs, absolute URLs
    products.map(function (product) {
      product.ProductDp = fullUrl(req, product.ProductDp);
      return product;
    });
    res.render('globalfeed', {
      products
    });
  });
}


