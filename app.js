const express = require("express");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRoute");
const MeetRouter = require("./routes/MeetRoute");
const UserRoute = require("./routes/UserRoute");
const { log } = require("./middlewares/log");

class App {
  app;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(log);
    this.app.use(AuthRouter);
    this.app.use(MeetRouter);
    this.app.use(UserRoute);
  }
}

module.exports = App;
