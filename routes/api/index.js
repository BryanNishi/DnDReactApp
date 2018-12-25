const router = require("express").Router();
const innRoutes = require("./inn");
const landRoutes = require("./land");
const dungeonRoutes = require("./dungeon");
// const treasureRoutes = require("./treasure");

//Inn Route
router.use("/inn", innRoutes);
//Land Route
router.use("/land", landRoutes);
//Dungeon Route
router.use("/dungeon", dungeonRoutes);
//Treasure Route
// router.use("/treasure", treasureRoutes);

module.exports = router;
