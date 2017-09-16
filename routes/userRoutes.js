var express = require("express");
var router = express.Router();
var path = require("path");
var User = require("../models/userModel.js");

// NOTES:  fill in User actions
//
//
//

//User Routes

// collect all user data
route.get("/user"), User.<>);
// collect user info per user account name (unique acount id found in id_token)
router.get("/user/:account_id?", User.);
// Add new User
router.post("/user/", User.<>);
// Update an existing user with a speicified id param, using data in req.body
router.patch("/user/:accout_id", User.<>);
// Delete a specific user using the id in req.params.id
router.delete("/user/:account_id", User.<>);

// collect user info per ID
router.get("/user/:account_id?/job_posted", User.);
router.get("/user/:account_id?/job_applied", User.);




module.exports = router;
