const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");

require("dotenv").config();

async function newUser(req, res) {
  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  await newUser.save();

  res.send({ message: "User Created!" });
}

async function signIn(req, res) {
  UserModel.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.send(err);
    }

    const verifPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!user) {
      res.status(404).send("User not found");
    }

    if (!verifPassword) {
      res.status(401).send("Password invalid!");
    }

    //Generate token
    var token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.send({ name: user.name, email: user.email, accessToken: token });
  });
}

module.exports = { newUser, signIn };
