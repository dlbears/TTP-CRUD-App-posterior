// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require('./Student');
const Campus = require('./Campus');

Students.campus = Students.belongsTo(Campuses, { as: 'campus' });
Campuses.students = Campuses.hasMany(Students);


module.exports = {
  Student, Campus
};
