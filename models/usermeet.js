"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserMeet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMeet.init(
    {
      user_id: DataTypes.INTEGER,
      meet_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      url: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserMeet",
      tableName: "usermeets",
    }
  );
  return UserMeet;
};
