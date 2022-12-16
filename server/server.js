const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const msgRoutes = require("./routes/msgRoutes");
const convRoutes = require("./routes/convRoutes");
const { newConv } = require("./controller/convController");

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
  socket.on("new-msg", (data) => {
    console.log("New-msg triggers !");
    socket.to(data.room).emit("msg", {
      sender: data.sender,
      receiver: data.receiver,
      content: data.content,
    });
    //AddMsg();
  });

  //Change room
  socket.on("change-room", (roomName) => {
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

app.listen(PORT, () => console.log(`Server is running... on ${PORT} port`));
