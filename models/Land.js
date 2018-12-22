var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var LandSchema = new Schema({
  adj: { type: String, required: true },
  noun: { type: String, required: true }
});

// Creates model
var Land = mongoose.model("Land", LandSchema);

module.exports = Land;