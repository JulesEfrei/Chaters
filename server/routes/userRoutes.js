const express = require("express");
const UserModel = require("../model/userModel");
const userController = require("../controller/userController");
const auth = require("../utils/auth");

const router = express.Router();

router.get("/", async (req, res) => userController.getAll(res));

router
  .route("/:id")
  .get(async (req, res) => userController.getOne(req, res))
  .delete(async (req, res) => userController.deleteOne(req, res));

router.patch("/update/:id", async (req, res) =>
  userController.updateOne(req, res)
);

module.exports = router;
