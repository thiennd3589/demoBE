"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class meet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet.init(
    {
      url: DataTypes.STRING,
      owner_id: DataTypes.INTEGER,
      startTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Meet",
      tableName: "meets",
    }
  );
  return meet;
};
