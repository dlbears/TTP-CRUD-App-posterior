//Pull in sequelize
const Sequelize = require('sequelize');

//Call in the database
const db = require('../db');

//Student model
const Students = db.define("students", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },

  imageUrl:{
    type: Sequelize.String,
    defaultValue: "This is an image",
    validate: {
      isUrl: true,
    }
  },
  
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true,
      min: 0.0,
      max: 4.0,
    }
  }

});

module.exports = Students;