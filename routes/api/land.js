const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/land"
router.route("/")
  .get(GeneratorController.getLand)

module.exports = router;
