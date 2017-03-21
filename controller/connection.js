var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://saroj:saroj@ds133340.mlab.com:33340/sarojnewdb');
var entrystore = mongoose.Schema({
    title: String,
    url:String,
catagory: String })
var entry = mongoose.model("register",entrystore);
module.exports = entry;
