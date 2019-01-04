var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var userSchema = new Schema({
  
  googleId: String,
  name: String  
  
});

// Creates model
var User = mongoose.model("User", userSchema);

module.exports = User;