var express = require("express");
var router = express.Router();
var controller=require("../controller/storecontroller");
router.get("/store",function(req,res,next){
console.log(req.body);
controller.getStore(req,res);
})
router.post("/store",function(req,res,next){
// console.log(req.body);
controller.store(req,res);
})
router.delete("/delete/:id",function(req,res,next){
// console.log(req.body);
controller.delStore(req,res);
})
module.exports = router