const express = require("express");
const userController = require("../controller/userController");
const { verifyToken } = require("../utils/auth");

const router = express.Router();

router.get("/", async (req, res) => userController.getAll(res));

router
  .route("/:id")
  .get(verifyToken, async (req, res) => userController.getOne(req, res))
  .delete(verifyToken, async (req, res) => userController.deleteOne(req, res))
  .patch(verifyToken, async (req, res) => userController.updateOne(req, res));

module.exports = router;
