const express = require("express");
const UserModel = require("../model/userModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
});

router.post("/new", async (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await newUser.save();
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.find({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id });
    res.status(204).send("User deleted!");
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (req.body.email) {
      user.email = req.body.email;
    }

    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
