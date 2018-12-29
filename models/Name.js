var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var nameSchema = new Schema({
  Dragonborn:{
    male:[String],
    female:[String]
  },
  Dwarf:{
    male:[String],
    female:[String]
  },
  Elf:{
    male:[String],
    female:[String]
  },
  Gnome:{
    male:[String],
    female:[String]
  },
  Half_Elf:{
    male:[String],
    female:[String]
  },
  Half_Orc:{
    male:[String],
    female:[String]
  },
  Halfling:{
    male:[String],
    female:[String]
  },
  Human:{
    male:[String],
    female:[String]
  },
  Tiefling:{
    male:[String],
    female:[String]
  }
});

// Creates model
var Name = mongoose.model("Name", nameSchema);

module.exports = Name;