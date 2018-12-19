var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var innSchema = new Schema({
 
  first: { type: String, required: true }
});

// Creates model
var InnAdj = mongoose.model("InnAdj", innSchema);

module.exports = InnAdj;