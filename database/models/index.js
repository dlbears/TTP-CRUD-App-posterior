// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require('./Student');
const Campus = require('./Campus');

//sync with the models
const db = require('../db');
db.sequelize.sync({alter: true});

//associations
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student, Campus
};
