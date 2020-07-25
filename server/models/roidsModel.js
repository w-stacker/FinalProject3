const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoidsSchema = new Schema({
  userName: { type: String },
  score: { type: Number },
  date: { type: Date, default: Date.now },
});

const Roids = mongoose.model("Roids", RoidsSchema);

module.exports = Roids;
