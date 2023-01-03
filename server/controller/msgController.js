const MsgModel = require("../model/msgModel");

async function getMsg(req, res) {
  try {
    const msg = await MsgModel.find({ convId: req.params.convId })
      .sort({ createdAt: -1 })
      .limit(20);
    res.status(200).send(msg.reverse());
  } catch (err) {
    res.status(400).send({ error: "An error occured" });
  }
}

async function newMsg(req, res) {
  console.log(req.body);
  console.log(req.params);
  try {
    const msg = new MsgModel({
      sender: req.body.sender,
      receiver: req.body.receiver,
      content: req.body.content,
      convId: req.params.convId,
    });

    await msg.save();
    res.status(201).send(msg);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function clear(res) {
  try {
    const remove = await MsgModel.deleteMany({});
    res.status(200).send("Sucess!");
  } catch (err) {
    res.status(400).send({ error: "Aïe. Problème." });
  }
}

module.exports = { getMsg, newMsg, clear };
