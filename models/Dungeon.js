var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var dungeonSchema = new Schema({
  direction: [String],
  element: [String],
  description:[String]
});

// Creates model
var Dungeon = mongoose.model("Dungeon", dungeonSchema);

module.exports = Dungeon;