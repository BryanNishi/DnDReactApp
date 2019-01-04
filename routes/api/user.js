const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/user"
router.route("/")
  .get(GeneratorController.getUsers)

module.exports = router;