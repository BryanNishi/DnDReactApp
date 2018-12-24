var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var DungeonSchema = new Schema({
 
  body: String
});

// Creates model
var DungeonGen = mongoose.model("Dungeon", DungeonSchema);

module.exports = DungeonGen;