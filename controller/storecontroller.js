var mongoose = require('mongoose');
var connection = require("./connection");
exports.store = function(req, res) {
    // var t=req.body.title;
    var data = connection({
         title: req.body.title,
    url:req.body.url,
catagory: req.body.catagory 
    });
data.save(function(err,data){
    if(err){
        console.log("error in query");
    throw err
    }
    else{
    console.log(data);
    res.json(data);
    }
});
}

exports.getStore = function(req,res){
    connection.find(function(err,docs){
        // console.log(docs);
        res.json(docs);
    })
}
exports.delStore = function(req,res){
    var id=req.params.id
    console.log(id);
    connection.find({_id:id},function(err,docs){
       if(err)
       throw error;
       else if(docs[0]!=null){
       docs[0].remove();
        res.json({message:"removed successfully"});
        console.log("removed successfully");
       }
    })
}