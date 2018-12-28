const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/treasure"
router.route("/")
  .get(GeneratorController.getTreasure)

module.exports = router;
