const express = require('express');
const app = express();
const db = require('./database/db')
const seedDatabase = require('./utilities/seedDatabase')

//Change to true to retain changes in db between server restarts
const noSeed = false; 

app.use(express.json());
app.use(express.urlencoded());

if (process.env.NODE_ENV === 'production') {
  db.sequelize.sync();
} else if (noSeed) {
  db.sequelize.sync({alter: true});
} else {
  db.sequelize.drop()
  .then(() => db.sequelize.sync({alter: true}))
  .then(() => seedDatabase())
}

app.use('/routes', require('./routes'));


app.listen(8080, () => {
  console.log("Listening to port 8080");
})


// // Here, we will sync our database, create our application, and export this module so that we can use it in the bin directory, where we will be able to establish a server to listen and handle requests and responses;

// // Require environmental variables if we are in development or testing;
// if (process.env.NODE_ENV !== 'production') {
//   require('./secrets');
// }

// // Module dependencies;
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const helmet = require('helmet');
// const compression = require('compression');
// const cors = require('cors')

// // Utilities;
// const createLocalDatabase = require('./utilities/createLocalDatabase');
// const seedDatabase = require('./utilities/seedDatabase');

// // Our database instance;
// const db = require('./database').sequelize;

// // Our apiRouter;
// const apiRouter = require('./routes/index');

// // A helper function to sync our database;
// const syncDatabase = () => {
//   if (process.env.NODE_ENV === 'production') {
//     db.sync();
//   }
//   else {
//     console.log('As a reminder, the forced synchronization option is on');
//     db.sync({ force: true })
//       .then(() => seedDatabase())
//       .catch(err => {
//         if (err.name === 'SequelizeConnectionError') {
//           createLocalDatabase();
//           seedDatabase();
//         }
//         else {
//           console.log(err);
//         }
//       });
//     }
// };

// // Instantiate our express application;
// const app = express();

// // A helper function to create our app with configurations and middleware;
// const configureApp = () => {
//   app.use(helmet());
//   app.use(logger('dev'));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
//   app.use(compression());
//   app.use(cookieParser());
//   app.use(cors())

//   // Mount our apiRouter;
//   app.use('/api', apiRouter);

//   // Error handling;
//   app.use((req, res, next) => {
//     if (path.extname(req.path).length) {
//       const err = new Error('Not found');
//       err.status = 404;
//       next(err);
//     }
//     else {
//       next();
//     }
//   });

//   // More error handling;
//   app.use((err, req, res, next) => {
//     console.error(err);
//     console.error(err.stack);
//     res.status(err.status || 500).send(err.message || 'Internal server error.');
//   });
// };

// // Main function declaration;
// const bootApp = async () => {
//   await syncDatabase();
//   await configureApp();
// };

// // Main function invocation;
// bootApp();

// // Export our app, so that it can be imported in the www file;
// module.exports = app;
