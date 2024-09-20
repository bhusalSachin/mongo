const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./models/db");

app.use(express.json());

const router = require("./routes");
app.use(router);

app.get("/", (req, res) => {
  return res.send("Server connected");
});

app.listen(3000, () => {
  console.log("Connected to the app");
});
