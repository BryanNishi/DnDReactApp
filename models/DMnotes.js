var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var DMnoteSchema = new Schema({
 
  body: String
});

// Creates model
var DMnote = mongoose.model("Note", DMnoteSchema);

module.exports = DMnote;