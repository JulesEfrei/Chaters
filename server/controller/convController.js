const ConvModel = require("../model/convModel");

async function checkExisting(req) {
  try {
    const conv = await ConvModel.find({
      user1: req.body.user1,
      user2: req.body.user2,
    }).countDocuments();

    const convReverse = await ConvModel.find({
      user1: req.body.user2,
      user2: req.body.user1,
    }).countDocuments();

    if (conv === 0 && convReverse === 0) {
      return false;
    } else {
      return true;
    }
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
      res.status(201).send({
        convId: conv.id,
        user1: req.body.user1,
        user2: req.body.user2,
      });
    });
  } else {
    let getConv = await ConvModel.findOne({
      user1: req.body.user1,
      user2: req.body.user2,
    });

    if (getConv === null) {
      getConv = await ConvModel.findOne({
        user2: req.body.user1,
        user1: req.body.user2,
      });
    }

    res.status(200).send(getConv);
  }
}

module.exports = { newConv };
