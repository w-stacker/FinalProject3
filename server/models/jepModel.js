const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JeopardySchema = new Schema({
  userName: { type: String },
  score: { type: Number },
  date: { type: Date, default: Date.now },
});

const Jeopardy = mongoose.model("Jeopardy", JeopardySchema);

module.exports = Jeopardy;
