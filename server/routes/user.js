const express = require("express");

const { register, loginUser } = require("../controllers/userController");

const user = express.Router();

user.post("/", register);
user.post("/loginUser", loginUser);

module.exports = user;
