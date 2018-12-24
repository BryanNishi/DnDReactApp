const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inn collection and inserts the names below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dndapp"
);

//**********************Inn Name Collection */
const innSeed = [
  {
    adj:[
    "Happy",
    "Sad",
    "Old",
    "New",
    "Jousting",
    "Salty",
    "Crusty",
    "Fighting",
    "Kneeling",
    "Sticky",
    "Starving"
  ],
 
    noun: [
    "Artist",
    "Apostle",
    "Beast",
    "Knight",
    "Beggar",
    "Fighter",
    "Fool",
    ],
  
    type: [
      "Inn",
      "Tavern",
      "Pub"
    ]
  }
  
  
];


db.Inn
  .remove({}) //clear out the collection
  .then(() => db.Inn.collection.insertMany(innSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//**********************Land Name Collection */
const landSeed = [
 {
  adj: [
    "Ancient",
    "Barren",
    "Crusty",
    "Carrion",
    "Callous",
    "Creaky",
    "Damp",
    "Dusty",
    "Damned",
    "Evergreen",
    "Erie",
    "Great",
    "Grand",
    "Hollow",
    "Jagged",
    "Lonley",
    "Lost",
    "Misty",
    "Musty",
    "Mossy",
    "Retched",
    "Rusty"
  ]
 },
 {
  noun: [
    "Swamp",
    "Mountains",
    "Sea",
    "Ocean",
    "Forrest",
    "Plains",
    "Highlands",
    "Mines",
    "Caves",
    "Archipeligo",
    "Islands",
    "River"
  ]
 }
];



db.Land
  .remove({}) //clear out the collection
  .then(() => db.Land.collection.insertMany(landSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });