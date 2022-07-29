const express = require("express");
const app = express();
const port = 5000;

// middleware
const cors = require('cors');
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// passport JWT
const passport = require("./lib/passport");
app.use(passport.initialize());

// route
const router = require("./routers");
app.use(router);

// nyalakan web server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
