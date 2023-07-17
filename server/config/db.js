const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017";

const ConnnectedDB = async () => {
  try {
    const connected = await mongoose.connect(URL);
    console.log(` conneted to mongodb ${connected.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnnectedDB;
