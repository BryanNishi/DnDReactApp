const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/inn"
router.route("/")
  .get(GeneratorController.getInn)

// Matches with "/api/land"
// router.route("/land")
// console.log("land")
//   .get(GeneratorController.getLand)




module.exports = router;
