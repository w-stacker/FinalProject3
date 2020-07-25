const router = require("express").Router();
const { findAll, createJeopardy } = require("../../controllers/jepController");

router.route("/").get(findAll).post(createJeopardy);

module.exports = router;
