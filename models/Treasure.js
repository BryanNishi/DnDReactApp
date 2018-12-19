var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var TreasureSchema = new Schema({
 
  body: String
});

// Creates model
var TreasureGen = mongoose.model("Note", TreasureSchema);

module.exports = TreasureGen;