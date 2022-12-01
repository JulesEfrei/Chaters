const express = require("express");
const msgController = require("../controller/msgController");
const { verifyToken } = require("../utils/auth");

const router = express.Router();

router.get("/clear", (req, res) => msgController.clear(req, res));

router
  .route("/:convId")
  .get((req, res) => msgController.getMsg(req, res))
  .post((req, res) => msgController.newMsg(req, res));

module.exports = router;
