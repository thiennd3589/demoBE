"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  record.init(
    {
      meet_id: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Record",
      tableName: "records",
    }
  );
  return record;
};
