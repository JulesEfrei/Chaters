const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

dbConnection.connect();

app.get("/", (req, res) => {
  res.send("Hello Word !");
});

app.use("/user", userRoutes);

app.listen(PORT, () => console.log("Server is running..."));
