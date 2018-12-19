var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var LandSchema = new Schema({
 
  body: String
});

// Creates model
var LandGen = mongoose.model("Note", LandSchema);

module.exports = LandGen;