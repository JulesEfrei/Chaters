const mongoose = require("mongoose");

module.exports.connect = function () {
  mongoose
    .connect("mongodb://localhost:27017/chaters", { useNewUrlParser: true })
    .then(() => console.log("Database connected !"))
    .catch((e) => console.log(e));
};
