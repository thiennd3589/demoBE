const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRoute");
const MeetRouter = require("./routes/MeetRoute");
const UserRoute = require("./routes/UserRoute");
const { log } = require("./middlewares/log");

class App {
  app;
  server;
  io;
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    global.io = this.io;
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(log);
    this.app.use("/static", express.static("./uploads"));
    this.app.use(AuthRouter);
    this.app.use(MeetRouter);
    this.app.use(UserRoute);
  }
}

const app = new App();

module.exports = app;
