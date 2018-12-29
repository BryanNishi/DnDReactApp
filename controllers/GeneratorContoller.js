const db = require("../models");


module.exports = {
  // Gets all Inn Names
  getInn: function (req, res) {
    db.Inn
      .find(req.query)
      .then(dbModel => res.json(dbInn))
      .catch(err => res.status(422).json(err));
  },
  addInn: function (req, res) {
    db.Inn
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//get all land names
  getLand: function (req, res) {
    db.Land
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//get all dungeon names
  getDungeon: function (req, res) {
    db.Dungeon
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//get all treasure
  getTreasure: function (req, res) {
    db.Treasure
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//get all names
  getName: function (req, res) {
    db.Name
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
