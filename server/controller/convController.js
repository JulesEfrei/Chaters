const ConvModel = require("../model/ConvModel");

async function checkExisting(req) {
  // => boolean
  try {
    const conv = await ConvModel.find({
      user1: req.body.user1,
      user2: req.body.user2,
    }).countDocuments();

    return conv === 0 ? false : true;
  } catch (err) {
    console.log(err);
  }
}

async function newConv(req, res) {
  // => convId
  if ((await checkExisting(req)) === false) {
    const conv = new ConvModel({
      user1: req.body.user1,
      user2: req.body.user2,
    });

    conv.save(function (err, conv) {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(201).send({ convId: conv.id });
    });
  } else {
    const getConv = await ConvModel.findOne({
      user1: req.body.user1,
      user2: req.body.user2,
    });
    res.status(200).send(getConv);
  }
}

module.exports = { newConv };
