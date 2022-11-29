const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");

require("dotenv").config();

async function newUser(req, res) {
  if (!req.body.name) {
    res.status(400).send({ error: "User name missing" });
    return false;
  }

  if (!req.body.email) {
    res.status(400).send({ error: "Email missing" });
    return false;
  }

  if (!req.body.password) {
    res.status(400).send({ error: "Password missing" });
    return false;
  }

  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  await newUser.save();

  res.status(200).send({ success: "User Created!" });
}

async function signIn(req, res) {
  UserModel.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(400).send({ error: err });
      return false;
    }

    const verifPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!user) {
      res.status(404).send({ error: "User not found" });
      return false;
    }

    if (!verifPassword) {
      res.status(401).send({ error: "Password invalid!" });
      return false;
    }

    //Generate token
    var token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res
      .status(200)
      .send({ name: user.name, email: user.email, accessToken: token });
  });
}

module.exports = { newUser, signIn };
