var express = require("express");
var router = express.Router();
var path = require("path");
var Job = require("../controllers/JobModelController.js");



// // collect all job data
router.get("/all", function(req, res) {
	Job.findAll(function(err, data) {
		res.json(data);
	});
}));


// Add new job
router.post("/post_one", function(req, res) {
	let job = req.body.job;
	Job.addOne(job, function(err,data){
		res.json(data); // actually frontend does not nned this returned obj
	});
}));

//add review
route.post("/review", Job.review(req.body.jobId, function(err,data){
	// Front end needs to give Job ID to review job
	res.json(data)
}))



// // Update an existing user with a speicified id param, using data in req.body
// router.patch("/user/:id", User.<>);

// // Delete a specific user using the id in req.params.id
// router.delete("/quotes/:id", User.<>);

// collect user info per ID
// router.get("/job/:account_id?", Job.);



module.exports = router;
