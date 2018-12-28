const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/name"
router.route("/")
  .get(GeneratorController.getName)

module.exports = router;
