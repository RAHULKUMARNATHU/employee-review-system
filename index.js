const express = require("express");
const dotenv = require("dotenv"); //require dotenv package
const mongoose = require('mongoose')
dotenv.config({ path: "./config.env" }); //import config.env file

const app = express();

const expressLayouts = require("express-ejs-layouts");

const db = require("./config/mongoose");
const port = process.env.port || 8000;

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });

// passport setup session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local");

const MongoStore = require("connect-mongo");

// for gettingform data
app.use(express.urlencoded());

// for static files
app.use(express.static("./assets"));

app.use(expressLayouts);

// to render css file link in header
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// middleware for use session cookie
app.use(
  session({
    name: "employeeReview",
    secret: "MicroTask",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost:27017/habit",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error while connecting to server");
    return;
  }
  console.log(`Server running on port ${port}.`);
});
