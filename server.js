var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var routes = require("./routes/routes.js");

var app = express();

var PORT = process.env.PORT || 3001;

// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));


// mongoose configuration
// if (process.env.MONGODB_URI) {
//   mongoose.connect("mongodb://heroku_dvvfddmk:dl13pf5q1rrinhhia5n6jr734p@ds121674.mlab.com:21674/heroku_dvvfddmk", {
//     useMongoClient: true
//   });
// }
// else {
//   var mongoose_db_name = "work4youDB";
//   mongoose.connect("mongodb://localhost/" + mongoose_db_name, {
//     useMongoClient: true
//   });
// }

console.log(process.env.NODE_ENV)



if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "development"){
    console.log(process.env.NODE_ENV)
    mongoose.connect( process.env.MONGODB_URI, {
        useMongoClient: true
    });
}else{
    let mongoose_db_name = "work4youDB";
    mongoose.connect("mongodb://localhost/" + mongoose_db_name, {
        useMongoClient: true
    });

}





app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, function() {
	console.log("Listening to " + PORT);
});

module.exports = app;
