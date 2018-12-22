const router = require("express").Router();
const innRoutes = require("./inn");

//Inn Route
router.use("/inn", innRoutes);

module.exports = router;
