const mongoose = require("mongoose");
require("dotenv").config();

function mongoServer() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => console.error("DB connection failed", err));
}

module.exports = mongoServer;
