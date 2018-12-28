var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var landSchema = new Schema({
  adj: [String],
  noun: [String]
});

// Creates model
var Land = mongoose.model("Land", landSchema);

module.exports = Land;