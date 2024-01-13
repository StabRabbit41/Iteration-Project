// require('dotenv').config();
const apiKEY = process.env.API_KEY;
// need to pass above object and the API key into the request to the API.
// we added some .env stuff, not being used as this page is sufficient
// having a .env folder for private info like an API key or database log in info is best practice
// but we didn't have time to implement/didn't need to because of the scope of this project

// init const StretchController, an object that stores the functionality
const StretchController = {
  // The getStretches method is a function that accepts 3 params, req, res, next, and stores the result of a fetch request to the exercises api in our
  getStretches: async (req, res, next) => {
    try {
      // init const muscle as muscle prop of request query
      const { muscle, name, type, difficulty } = req.query;
      //console.log(req.query);
      // create API request string from query parameters
      let apiString = 'https://api.api-ninjas.com/v1/exercises?';

      // allow for muscle group input
      if (muscle) apiString += `muscle=${muscle}`;
      // allow for workout name input
      if (name) apiString += `&name=${name}`;
      // allow variation in workout type - since stretching is the default for the app it defaults to that
      if (type) apiString += `&type=${type}`;
      else apiString += `&type=stretching`;

      if (difficulty) apiString += `&difficulty=${difficulty}`;

      // init const apiRes as output from api request
      const apiRes = await fetch(apiString, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKEY },
      }).then((response) => response.json());
      // store apiRes in res.locals
      //console.log(apiRes);
      res.locals.apiRes = [];
      const ex_names = {};

      // filter out duplicate exercises in api response
      apiRes.forEach((ex) => {
        //console.log('checking: ', ex);
        if (!(ex.name in ex_names)) {
          //console.log('here', ex.name, ex_names, res.locals.apiRes);
          res.locals.apiRes.push(ex);
          ex_names[ex.name] = true;
        }
      });

      // sort api response exercises alphabetically
      res.locals.apiRes.sort((ex1, ex2) => (ex1.name > ex2.name ? 1 : -1));

      // return the invocation of next to move to next middleware
      return next();
    } catch (error) {
      const errorObject = {
        // log to developer
        log: 'Error occurred in StretchController.GetExercise',
        // message to client
        message: { error: 'An error has occurred in getting an exericse' },
        status: 400,
      };
      // pass error object to global error handler
      return next(errorObject);
    }
  },
};

module.exports = StretchController;
