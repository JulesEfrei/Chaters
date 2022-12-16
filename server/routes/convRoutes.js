const express = require("express");
const ConvController = require("../controller/convController");
const { verifyToken } = require("../utils/auth");

const router = express.Router();

router.post("/new-conversation", (req, res) =>
  ConvController.newConv(req, res)
);

module.exports = router;
