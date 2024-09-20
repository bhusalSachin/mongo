const mongoose = require("mongoose");

const mongoUri =
  "mongodb://sachin:qfF3X1x07rjStjFm@demo-shard-00-00.bdq8l.mongodb.net:27017,demo-shard-00-01.bdq8l.mongodb.net:27017,demo-shard-00-02.bdq8l.mongodb.net:27017/sachin_demo?ssl=true&authSource=admin";

// const mongoUri = "mongodb://localhost:27017";

// const mongoUri =
//   "mongodb+srv://sachin:qfF3X1x07rjStjFm@demo.bdq8l.mongodb.net?ssl=true";

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.mongoUri)
  .then((db) => {
    console.log("Connected to the mongodb server successfuly: ");
  })
  .catch((err) => console.log(err));
