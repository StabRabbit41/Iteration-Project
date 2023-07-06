// goal: set up express routing
// enviroment variable configuration
require('dotenv').config();
// steps
// create a controller.js
// this will contain routers
// ensure exports/imports are handled
// declare port
// define endpoints and actions
// add listener for PORT

const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller/ExerciseController.js');
const startServer = require('./database/dbConnection.js');
const userController = require('./controller/UserController.js');
const cors = require('cors');

const PORT = 3000;

app.use(express.json());
app.use(cors());
// if you ever have a form on your frontend, express.urlencoded
app.use(express.urlencoded({ extended: true })); // this will be helpful for stringifying a form req from an .html file

// want to send get request on 'submit' from the dropdown selection on home page
// dropdown body be the req.body that gets sent to controller.js
// the req.body is used to create and make the API call
// get response from res.locals.varName and res.status().json(stretch array)

// new instance of router
// const stretchRouter = express.Router();
startServer();

// respond to get request ot root wiht html for welcome screen
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(
      path.resolve(__dirname, '../Client/login and signup/signup-login.html')
    );
});

app.get('/landingpage', (req, res) => {
  return res
    .status(200)
    .sendFile(
      path.resolve(__dirname, '../Client/login and signup/WelcomeScreen.html')
    );
});

// to create user into database // takes in body // username, password
app.post('/user', userController.registerUser, (req, res) => {
  console.log();
  return res.status(201).json(res.locals.registeredUser);
});

// delete user from database
app.delete('/user', userController.deleteUser, (req, res) => {
  return res.status(202).json(res.locals.deletedUser);
});

// TODO:
// get user from database

// to authenticate user based on input username and password
app.post('/login', userController.authUser, (req, res) => {
  return res.status(202).json(res.locals.user);
});

// /API/exercises?muscle=${muscle}&type=stretching
app.get('/api', controller.getStretches, (req, res) => {
  return res.status(203).json(res.locals.apiRes);
});

// add a favorite
app.patch('/user/favorite', userController.addFavorite, (req, res) => {
  //console.log('in server.js, res.locals.updatedUser: ', res.locals.updatedUser);
  return res.status(202).json(res.locals.updatedUser);
});

// delete a favorite
app.delete('/user/favorite', userController.deleteFavorite, (req, res) => {
  return res.status(202).json(res.locals.updatedUserDeletedFavorite);
});


// error if route not found
app.use(() =>
  next({
    status: 404,
    log: 'Route not found',
  })
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listener

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
