var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var innSchema = new Schema({
  adj: [String],
  noun: [String],
  type: [String],
});

// Creates model
var Inn = mongoose.model("Inn", innSchema);

module.exports = Inn;