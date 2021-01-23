//Pull in sequelize
const Sequelize = require('sequelize');

//Call in the database
const db = require('../db').sequelize;

//Student model
const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
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
  //   validate: {
  //     min: 0.0,
  //     max: 4.0,
  //   }
  }

});

module.exports = Student;
