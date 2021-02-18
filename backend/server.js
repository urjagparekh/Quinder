import routes from "./api/routes";
const express = require("express");

const app = express();

const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dashBillModels = require("./api/models");

//mongoose instance creation and connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/qwerbook");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app); //register the route

app.listen(port);
