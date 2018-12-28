const router = require("express").Router();
const innRoutes = require("./inn");
const landRoutes = require("./land");
const dungeonRoutes = require("./dungeon");
const treasureRoutes = require("./treasure");
const nameRoutes = require("./name");

//Inn Route
router.use("/inn", innRoutes);
//Land Route
router.use("/land", landRoutes);
//Dungeon Route
router.use("/dungeon", dungeonRoutes);
//Treasure Route
router.use("/treasure", treasureRoutes);
//Name Route
router.use("/name", nameRoutes);

module.exports = router;
