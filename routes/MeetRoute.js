const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { createMeet, getMeet } = require("../controller/MeetController");
const MeetRouter = express.Router();

MeetRouter.post("/meet", authenticate, createMeet);
MeetRouter.get("/meet/:id", authenticate, getMeet);

module.exports = MeetRouter;
