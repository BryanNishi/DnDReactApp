const db = require("../models");


module.exports = {
  // Gets all Inn Names
  getInn: function (req, res) {
    db.Inn
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Gets the character sheet with the given id
  // getLand: function (req, res) {
  //   db.Land
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

};
