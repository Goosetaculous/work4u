var express = require("express");
var router = express.Router();
var path = require("path");
var UserModelController = require("../controllers/UserModelController.js");


//User Routes

// // collect and display all user data
// route.get("/user", User.all);

// // collect user info per user account name (unique acount id found in id_token)
// router.get("/user/:account_id?", User.test);

// Add new User
router.post("/add", function(req,res){

	/*console.log("========================")
	console.log("User post route triggered")
	var test = { firstName: "jon" ,lastName:"doe", auth0Id: "123"};
	console.log("test user data ")
	console.log(test)

	console.log("========================")

	UserModelController.add(test, function(data) {
		res.json(data);
	});*/
});


// // Update an existing user with added post with a speicified id param, using data in req.body 
// router.patch("/user/:accout_id/addpost", User.);

// // Delete a specific user using the id in req.params.id
// router.delete("/user/:account_id", User.<>);

// // collect user info per ID
// router.get("/user/:account_id?/job_posted", User.);
// router.get("/user/:account_id?/job_applied", User.);


module.exports = router;
