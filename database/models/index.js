// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Students = require('./Students');
const Campuses = require('./Campuses');

Students.belongsTo(Campuses);
Campuses.hasMany(Students);

module.exports = {
  Students, Campuses
};
