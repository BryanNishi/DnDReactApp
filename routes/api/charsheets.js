const router = require("express").Router();
const CharSheetController = require("../../controllers/CharSheetController");

// Matches with "/api/charsheets"
router.route("/")
  .get(CharSheetController.findAll)
  .post(CharSheetController.create);

// Matches with "/api/charsheets/:id"
router
  .route("/:id")
  .get(CharSheetController.findById)
  .put(CharSheetController.update)
  .delete(CharSheetController.remove);

module.exports = router;
