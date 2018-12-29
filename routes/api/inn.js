const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/inn"
router.route("/")
  .get(GeneratorController.getInn)
  .post(GeneratorController.addInn);

module.exports = router;
