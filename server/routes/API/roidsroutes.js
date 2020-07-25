const router = require("express").Router();
const {
  findAll,
  createAsteroids,
} = require("../../controllers/roidsController");

router.route("/").get(findAll).post(createAsteroids);

module.exports = router;
