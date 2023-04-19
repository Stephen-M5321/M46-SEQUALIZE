const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const author = connection.define("Author", {
    authorname:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    });

module.exports = author;


