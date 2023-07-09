"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  message.init(
    {
      owner_id: DataTypes.INTEGER,
      meet_id: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      send_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Message",
      tableName: "messages",
    }
  );
  return message;
};
