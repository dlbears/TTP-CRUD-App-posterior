//Pull in sequelize
const Sequelize = require('sequelize');

//Call in the database
const db = require('../db').sequelize;

//Campus model
const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.brooklyn.cuny.edu/web/adm_general/200204_East_Quad_738x330.jpg",
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

module.exports = Campus;