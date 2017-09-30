var express = require("express");
var path = require("path");

var userRoutes = require("./userRoutes.js");
var jobRoutes = require("./jobRoutes.js");
var app = express();

var router = new express.Router();

// Use the userRoutes module for any routes starting with "/user"
router.use("/user", userRoutes);

// Use the jobRoutes module for any routes starting with "/job"
router.use("/job", jobRoutes);



router.use('/s3', require('react-dropzone-s3-uploader/s3router')({
  bucket: 'work4u',                           // required
  // region: 'us-east-1',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'private'                                // this is the default - set to `public-read` to let anyone view uploads
}));


// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
