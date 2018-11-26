var mongoose = require( 'mongoose' );

module.exports.load=function(req,res)
{
  res.render('cart',{ products:[{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/4.jpg',userdp:'',description:'picture1',title:'A',price:'8000'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/1.jpg',userdp:'',description:'picture1',title:'B',price:'4000'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/2.jpg',userdp:'',description:'picture1',title:'C',price:'3000'},{productdp:'http://nabeel.co.in/files/bootsnipp/gallery/3.jpg',userdp:'',description:'picture1',title:'D',price:'2000'}]});
}
