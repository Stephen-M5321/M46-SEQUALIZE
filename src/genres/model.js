const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Genre = connection.define("Genre", {
    genre: {
    type: DataTypes.STRING,
    },

    title:{ 
        type:DataTypes.STRING,
        // allowNull: false,
        unique: true,
    },

    author: {
        type:DataTypes.STRING,
    },
})

module.exports = Genre;

