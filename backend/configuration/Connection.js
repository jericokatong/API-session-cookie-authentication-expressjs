const { Sequelize } = require("sequelize");

const db = new Sequelize("db_session", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
