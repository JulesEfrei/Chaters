const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

dbConnection.connect();

app.get("/", (req, res) => {
  res.send("Hello Word !");
});

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running... on ${PORT} port`));
