const router = require("express").Router();
const userRoutes = require("./userRoutes");
const snakeRoutes = require("./snakeRoutes");
const tetrisRoutes = require("./tetrisRoutes");
const minesweeperRoutes = require("./minesweeperRoutes");
const jepRoutes = require("jepRoutes");
const roidsRoutes = require("roidsRoutes");

router.use("/user", userRoutes);
router.use("/snake", snakeRoutes);
router.use("/jep", jepRoutes);
router.use("/roids", roidsRoutes);
router.use("/tetris", tetrisRoutes);
router.use("/minesweeper", minesweeperRoutes);

module.exports = router;
