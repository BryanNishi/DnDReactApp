const mongoose = require("mongoose");
const db = require("../models");

// Empties the db collections and inserts the names below
//To SEED Heroku/mLab, run in the root folder: '$ heroku run node scripts/seedDB.js'

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dndapp"
);

//**********************Inn Name Collection */
const innSeed = [{
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
  }];


db.Inn
  .remove({}) //clear out the collection
  .then(() => db.Inn.collection.insertMany(innSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Inn records inserted!");
    // process.exit(0);
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
    // process.exit(0);
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
    // process.exit(0);
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
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  //**********************Name Collection */
const nameSeed = [
  {
    Dragonborn : {
      male: ["Andujar", "Armagan", "Armek", "Arzan", "Axaran", "Belaxarim", "Brevarr", "Djemidor", "Draxan", "Fayal", "Grax", "Iojad", "Inzul", "Khiraj", "Kreytzen", "Lejek", "Mar", "Nazir", "Nedam", "Nevek", "Ravaran", "Razaan", "Sarax", "Sarram", "Savaxis", "Siangar", "Sirizan", "Sunan", "Szuran", "Tajan", "Tamajon", "Tenahn", "Toxal", "Tzegyr", "Vantajar", "Vharkus", "Xafiq", "Zarkhil"],
      female: ["Artana", "Kalas", "Khagra", "Leytra", "Myrka", "Naya", "Sarcha", "Shirren", "Sirivistra", "Sufana", "Tamara", "Vrumadi", "Zovra", "Arizita", "Xyrinn", "Sosira", "Koqorel", "Nyszita", "Welsifaeth", "Dabith", "Irlywyn", "Nashann", "Zofkira"]
    },
    Dwarf:{
      male:["Agaro", "Arnan", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkûl", "Darkûl", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek", "Garmûl", "Glint", "Ghorvas", "Grimmalk", "Haeltar", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum", "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar", "Thorbalt", "Thorin", "Tredigar", "Vabûl", "Vistrum", "Wolvar"],
      female:["Beyla", "Fenryl", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra", "Veklani", "Vronwe", "Zebel", "Kathvia", "Ranmyl", "Nissyl", "Katnia", "Artin", "Baermora", "Redmera", "Belgwyn", "Brynbera", "Redryl"]
    },
    Elf:{
      male:["Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Elgoth", "Farlien", "Ferel", "Gaerlan", "Iafalior", "Kaelthorn", "Laethan", "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas"],
      female:["Aryllan", "Atalya", "Ayrthwil", "Irva", "Lyfalia", "Ronefel", "Thirya", "Velene", "Venefiq", "Zereni", "Olajyre", "Miaroris", "Yllalee", "Origwyn", "Syltris", "Xyrbanise", "Krisxisys", "Liakalyn", "Zylfiel", "Chaemys"]
    },
    Gnome:{
      male:["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
      female:["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"]
    },
    Half_Elf:{
      male:["Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"],
      female:["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora"]
    },
    Half_Orc:{
      male:["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk", "Mogudurk", "Trukamak", "Belorash", "Ullogall", "Zasebur", "Asadark", "Ukegar", "Zavid", "Sorubak", "Brakumash"],
      female:["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda", "Rasagur", "Zenogri", "Goranir", "Kerugh", "Garud", "Puyizira", "Rahkone", "Rohkemar", "Lagirook", "Tamume"]
    },
    Halfling:{
      male:["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby","Arthan", "Carvin", "Corby", "Cullen", "Egen", "Ernest", "Gedi", "Heron", "Jeryl", "Keffen", "Kylem", "Kynt", "Leskyn", "Neff", "Orne", "Quarrel", "Rabbit", "Rilkin", "Snakebait", "Tarfen", "Titch", "Tuck", "Whim"],
      female:["Caliope", "Emily", "Piper", "Rixi", "Sabretha", "Teg", "Tilly", "Toira", "Vexia", "Vil", "Vzani", "Zanthe", "Ziza", "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"]
    },
    Human:{
      male:["StrAnlow", "Arando", "Bram", "Cale", "Dalkon", "Daylen", "Dodd", "Dungarth", "Dyrk", "Eandro", "Falken", "Feck", "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant", "Leyten", "Madian", "Malfier", "Markus", "Meklan", "Namen", "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin", "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran", "Tavon", "Tegan", "Vanan", "Vincenting"],
      female:["Azura", "Brey", "Hallan", "Kasaki", "Lorelei", "Mirabel", "Pharana", "Remora", "Rosalyn", "Sachil", "Saidi", "Tanika", "Tura", "Tylsa", "Vencia", "Xandrilla", "Shezinol", "Zepel", "Luzulsi", "Elsul", "Tenni", "Nah", "Holgoge", "Lolgoy", "Ivory", "Lizhiphe", "Chesa"]
    },
    Tiefling:{
      male:["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Arkrut", "Kaiichar", "Akxus", "Gumus", "Skathus", "Kilakas", "Kilxik", "Skaxes", "Aetron", "Aetron", "Xarilius"],
      female:["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta", "Levnirith", "Afspira", "Yucyra", "Grigrea", "Mithlaia", "Orilies", "Diseis", "Afwure", "Nithza", "Shahala", "Sarrissa"]
    }
  }
];

db.Name
  .remove({}) //clear out the collection
  .then(() => db.Name.collection.insertMany(nameSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Name records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });