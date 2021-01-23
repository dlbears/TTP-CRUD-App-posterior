//Pull in sequelize
const Sequelize = require('sequelize');

//Call in the database
const db = require('../db').sequelize;

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
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
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
