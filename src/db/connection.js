const { sequelize } = require("sequelize");

const connection = new sequelize(process.env.MYSQL_URL);

connection.authenticate();

console.log("DB connection is working");

module.exports = connection;