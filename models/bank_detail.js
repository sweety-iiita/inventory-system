"use strict";
const { Sequelize, Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bank_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bank_detail.init(
    {
      uuid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      account_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ifsc_code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      modelName: "Bank_detail",
    }
  );
  return Bank_detail;
};
