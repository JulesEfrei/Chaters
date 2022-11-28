const mongoose = require("mongoose");

require("dotenv").config();

module.exports.connect = function () {
  mongoose
    .connect(process.env.DATABASE_URI, { useNewUrlParser: true })
    .then(() => console.log("Database connected !"))
    .catch((e) => console.log(e));
};
