var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var TreasureSchema = new Schema({
  gemstones: {
    tenGP:[String],
    fiftyGP: [],
    hundredGP:[],
    fiveHundredGP: [],
    thousandGP: [],
    fiveThousandGP: []
  },
  art: {

  },
  coins: {

  },
  magic_items: {

  }
 
});

// Creates model
var TreasureGen = mongoose.model("Treasure", TreasureSchema);

module.exports = TreasureGen;