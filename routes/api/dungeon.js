const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/dungeon"
router.route("/")
  .get(GeneratorController.getDungeon)

module.exports = router;
