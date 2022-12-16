const mongoose = require("mongoose");

const ConvSchema = mongoose.Schema({
  user1: String,
  user2: String,
});

module.exports = mongoose.model("Conv", ConvSchema);
