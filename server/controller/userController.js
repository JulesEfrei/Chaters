const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");

async function getAll(res) {
  const user = await UserModel.find();
  res.send(user);
}

async function getOne(req, res) {
  try {
    const user = await UserModel.find({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404).send({ error: "User doesn't exist!" });
  }
}

async function deleteOne(req, res) {
  try {
    await UserModel.deleteOne({ _id: req.params.id });
    res.status(204).send("User deleted!");
  } catch {
    res.status(404).send({ error: "User doesn't exist!" });
  }
}

async function updateOne(req, res) {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (req.body.email) {
      user.email = req.body.email;
    }

    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 10);
    }

    await user.save();
    res.send(user);
  } catch {
    res.status(404).send({ error: "User doesn't exist!" });
  }
}

module.exports = { getAll, getOne, deleteOne, updateOne };
