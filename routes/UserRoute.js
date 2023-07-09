const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { getUserById, getUserProfile } = require("../controller/UserController");
const UserRoute = express.Router();

UserRoute.get("/user/profile", authenticate, getUserProfile);

module.exports = UserRoute;
