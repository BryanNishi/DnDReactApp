var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var TreasureSchema = new Schema({
 
  body: String
});

// Creates model
var TreasureGen = mongoose.model("Treasure", TreasureSchema);

module.exports = TreasureGen;