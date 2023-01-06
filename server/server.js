const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const msgRoutes = require("./routes/msgRoutes");
const convRoutes = require("./routes/convRoutes");
const MsgModel = require("./model/msgModel");
const UserModel = require("./model/userModel");
const ConvModel = require("./model/convModel");

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000", //Front-end URL
  },
});

require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT;

io.on("connection", (socket) => {
  console.log("Connected from Server : ", socket.id);

  //New-msg
  socket.on("new-msg", async (data) => {
    console.log("New-msg triggers !");
    io.to(data.room).emit("msg", {
      sender: data.sender,
      receiver: data.receiver,
      content: data.content,
    });

    try {
      const msg = new MsgModel({
        sender: data.sender,
        receiver: data.receiver,
        content: data.content,
        convId: data.room,
      });
      await msg.save();
    } catch (e) {
      console.log(e);
    }
  });

  //Change room
  socket.on("change-room", (roomName) => {
    console.log("Changement de room Server => ", roomName);
    socket.join(roomName);
  });
});

httpServer.listen(8081);

app.use(cors());
app.use(express.json());

dbConnection.connect();

app.get("/", (req, res) => {
  res.send("Hello Word !");
});

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/msg", msgRoutes);
app.use("/conv", convRoutes);

app.get("/clear-all", async (req, res) => {
  try {
    const removeMsg = await MsgModel.deleteMany({});
    const removeUser = await UserModel.deleteMany({});
    const removeConv = await ConvModel.deleteMany({});
    res.status(200).send("Database Cleared!");
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

app.listen(PORT, () => console.log(`Server is running... on ${PORT} port`));
