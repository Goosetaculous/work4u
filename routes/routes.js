var express = require("express");
var path = require("path");

var userRoutes = require("./userRoutes");
var jobRoutes = requeire("./jobRoutes");

var router = new express.Router();

// Use the userRoutes module for any routes starting with "/user"
router.use("/user", userRoutes);

// Use the jobRoutes module for any routes starting with "/job"
router.use("/job"), jobRoutes);


// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
