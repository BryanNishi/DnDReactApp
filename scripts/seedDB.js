const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inn collection and inserts the names below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dndapp"
);

const innAdjSeed = [
  {
    first: "Happy"
  },
  {
    first: "Sad"
  },
  {
    first: "Old"
  },
  {
    first: "New"
  },
  {
    first: "Jousting"
  },
  {
    first: "Salty"
  },
  {
    first: "Crusty"
  },
  {
    first: "Fighting"
  },
  {
    first: "Kneeling"
  },
  {
    first: "Sticky"
  },

];

db.InnAdj
  .remove({})
  .then(() => db.InnAdj.collection.insertMany(innAdjSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
