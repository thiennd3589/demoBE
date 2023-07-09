const App = require("./app");
const app = new App().app;
const { Sequelize } = require("sequelize");

const PORT = 8080;

app.listen(PORT, () => {
  console.log("App is running at port " + PORT);
  const sequelize = new Sequelize("find_meet", "postgres", "Thien@2021", {
    host: "localhost",
    dialect: "postgres",
  });
  sequelize.authenticate();
});
