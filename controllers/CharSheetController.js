const db = require("../models");


module.exports = {
  // Gets all character sheets
  getCharsheet: function(req, res) {
    db.CharSheetData
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Gets the character sheet with the given id
  getCharsheetById: function(req, res) {
    db.CharSheetData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Deletes the character sheet with the given id
  deleteCharsheet: function(req, res) {
    db.CharSheetData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Saves a character sheet to the database
  saveCharsheet: function(req, res) {
    db.CharSheetData
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Update existing character sheet
  update: function(req, res) {
    db.CharSheetData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
