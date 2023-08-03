const app = require("./app");
const { Sequelize } = require("sequelize");

const PORT = 8080;

app.app.listen(PORT, () => {
  console.log("App is running at port " + PORT);
  const sequelize = new Sequelize("find_meet", "postgres", "Thien@2021", {
    host: "localhost",
    dialect: "postgres",
  });
  sequelize.authenticate();
});

app.io.listen("8081");
app.io.on("connection", (socket) => {
  socket.on("join", (data) => {
    if (!socket.rooms.has(`meet_${data.meet_id}`)) {
      socket.join(`meet_${data.meet_id}`);
    }
    socket.on("drawing", (data) => {
      socket.to(`meet_${data.meet_id}`).emit("drawing", data);
    });
  });
});

module.exports = { app };
