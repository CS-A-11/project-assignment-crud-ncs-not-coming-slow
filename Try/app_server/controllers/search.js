let Product = require('../models/product');
var User = require('../models/user');





module.exports.load=function(req,res)
{
res.render('searchresult');
}

module.exports.showresult=function(req,res)
{
    console.log("ïn search");
    Product.find({$or:[ {'Title':req.params.text}, {'Description':req.params.text} ]},function(err,result){
        if(err)
        {
            throw(err);
        }
        else
        console.log(result);
    })
}