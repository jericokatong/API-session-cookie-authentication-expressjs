const { DataTypes } = require("sequelize");
const db = require("../configuration/Connection");

const User = db.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

(async () => {
  User.sync();
})();
