//Pull in sequelize
const Sequelize = require('sequelize');

//Call in the database
const db = require('../db').sequelize;

//Campus model
const Campuses = db.define("campuses", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "This is an image",
    validate: {
      isUrl: true,
    } 
  },

  address: {
      type: Sequelize.STRING,
      allowNull: false,
  },

  description: {
      type: Sequelize.TEXT,
  }

});

module.exports = Campuses;