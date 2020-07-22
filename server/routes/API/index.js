const router = require("express").Router();
const userRoutes = require("./userRoutes");
const snakeRoutes = require("./snakeRoutes");


router.use("/user", userRoutes);
router.use("/snake", snakeRoutes);

module.exports = router