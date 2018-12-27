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
    adj: [
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
    console.log(data.result.n + " /inn records inserted!");
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
    ],

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
    console.log(data.result.n + " Land records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Dungeon Collection */
const dungeonSeed = [
  {
    direction: [
      "Upstairs",
      "Downstairs",
      "North",
      "East",
      "South",
      "West"
    ],

    element: [
      "Small Store-room",
      "Large Store-room",
      "Narrow Hallway",
      "Wide Hallway",
      "Long Hallway",
      "Short Hallway",
      "Small Barracks",
      "Large Barracks",
      "Armory",
      "Throne Room",
      "Galley",
      "Larder",
      "Dead End"
    ],

    description: [
      "Well-Lit",
      "Poorly-Lit",
      "Unlit",
      "Cold",
      "Hot",
      "Drafty",
      "Musty"
    ]
  }
];



db.Dungeon
  .remove({}) //clear out the collection
  .then(() => db.Dungeon.collection.insertMany(dungeonSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Dungeon records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Treasure Collection */
const treasureSeed = [
  {
    gemstones: {
      tenGP: [
        "Azurite",

      ],
      fiftyGP: [
        "Bloodstone",
      ],
      hundredGP: [
        "Amber"
      ],
      fiveHundredGP: [
        "Alexandrite"
      ],
      thousandGP: [
        "Black Opal"
      ],
      fiveThousandGP: [
        "Black Sapphire"
      ]
    }
  },
  {
    art: {
      twentyFiveGP: [
        "Silver Ewer"
      ],
      twoFiftyGP: [
        "Gold Ring set with Bloodstones"
      ],
      sevenFiftyGP: [
        "Silver Chalice set with Moonstones"
      ],
      twoThousandFiveHundredGP: [
        "Fine Gold Chain set with a Fire Opal"
      ],
      sevenThousandFiveHundredGP: [
        "Jeweled Gold Crown"
      ]
    }
  },
  {
    coins: {
      idividual: [

      ],

      hoard: [

      ]
    },
  },
  {
    magic_items: [

    ]
  }
];



db.Treasure
  .remove({}) //clear out the collection
  .then(() => db.Treasure.collection.insertMany(treasureSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Treasure records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });