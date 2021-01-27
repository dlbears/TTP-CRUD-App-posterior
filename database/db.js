// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');

//calling your local psql
const sequelize = new Sequelize('campus_students', 'postgres', 'Bakugan7399',{
    host: process.env.DATABASE_URL || 'localhost',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true 
    }
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
