/* All Require */
const controller = require("../controllers/user.controller");


/* Exports Routes */
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });





  /* Photos Routes */
  app.get("/api/photos/get/:page", controller.getPhotos);





  
};