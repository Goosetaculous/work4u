var express = require("express");
var router = express.Router();
var path = require("path");
var Job = require("../controllers/JobModelController.js");


// collect all job data
router.get("/all", function(req, res) {
	Job.findAll(function(err, data) {
		res.json(data);
	});
});

// add new job
router.post("/add_one", function(req, res) {

	var job = req.body.job;

	Job.addOne(job, function(err, data){
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// apply for a job
router.post("/apply", function(req, res) {
	var jobId = req.body.jobId;
	var applicantId = req.body.applicantId;
	Job.applyForAJob(jobId, applicantId, function(err, data) {
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// confirm a job
router.post("/confirm", function(req, res) {
	var jobId = req.body.jobId;
	Job.confirmAJob(jobId, function(err, data) {
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// review a job
router.post("/review", function(req, res) {
	var jobId = req.body.jobId;
	var reviewFromJobPoster = req.body.reviewFromJobPoster;
	Job.confirmAJob(jobId, reviewFromJobPoster, function(err, data) {
		res.json(data); // actually frontend does not nned this returned obj
	});
});


// (job poster) cancel a job
router.post("/cancel_job", function(req, res) {
	var jobId = req.body.jobId;
	Job.cancelAJob(req.body.jobId, function(err,data){
		res.json(data)
	});
});

// (applicant) withdraw an offer
router.post("/withdraw_offer", function(req, res) {
	var jobId = req.body.jobId;
	Job.withdrawOffer(req.body.jobId, function(err,data){
		res.json(data)
	});
});

module.exports = router;
