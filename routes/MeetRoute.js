const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createMeet,
  getMeet,
  startJoinMeet,
  sendMessage,
  sendFile,
} = require("../controller/MeetController");
const { upload } = require("../service/FileService");
const MeetRouter = express.Router();

MeetRouter.post("/meet", authenticate, createMeet);
MeetRouter.post("/join/meet", authenticate, startJoinMeet);
MeetRouter.get("/meet/:id", authenticate, getMeet);
MeetRouter.post("/message", authenticate, sendMessage);
MeetRouter.post("/file", authenticate, upload.single("file"), sendFile);

module.exports = MeetRouter;
