// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require('./Student');
const Campus = require('./Campus');

Student.campus = Student.belongsTo(Campus, { as: 'campus' });
Campus.students = Campus.hasMany(Student);


module.exports = {
  Student, Campus
};
