// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('campus_students', 'postgres', 'Bakugan7399',{
    host: 'localhost',
    dialect: 'postgres'
});

const testDatabase = async () => {
    sequelize.authenticate()
    .then(() => {
        console.log("Connected")
    })
    .catch((error) => {
        console.log("Failed");
    })
}

testDatabase();

module.exports = {sequelize};
