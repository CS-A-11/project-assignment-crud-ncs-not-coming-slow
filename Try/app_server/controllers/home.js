var mongoose = require( 'mongoose' );

module.exports.load=function(req,res)
{
  res.render('home',{posts:[{name:'Ahmad',userdp:'http://nabeel.co.in/files/bootsnipp/gallery/3.jpg',productdp:'http://nabeel.co.in/files/bootsnipp/gallery/2.jpg',description:'Hi this is my product'}]});
}
