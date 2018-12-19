const router = require("express").Router();
const characterRoutes = require("./charsheets");

// Book routes
router.use("/character", characterRoutes);

module.exports = router;
