"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  file.init(
    {
      meet_id: DataTypes.INTEGER,
      url: DataTypes.STRING,
      owner_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "File",
      tableName: "files",
    }
  );
  return file;
};
