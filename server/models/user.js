const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  given_name: { type: String, required: true },
  family_name: { type: String, required: true },
  nickname: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = userSchema;
