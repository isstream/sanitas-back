/* All Required */
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");



const app = express();

/* Cors protections  */
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));




// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.use(
  cookieSession({
    name: "secret-name-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


// routes
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});