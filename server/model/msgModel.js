const mongoose = require("mongoose");

const MsgSchema = mongoose.Schema(
  {
    sender: String,
    receiver: String,
    content: String,
    convId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Msg", MsgSchema);
