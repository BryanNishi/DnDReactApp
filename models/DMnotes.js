var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var DMnoteSchema = new Schema({
 
  body: String
});

// Creates model
var DMnote = mongoose.model("DMNote", DMnoteSchema);

module.exports = DMnote;