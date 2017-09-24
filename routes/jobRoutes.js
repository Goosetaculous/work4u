var express = require("express");
var router = express.Router();
var path = require("path");
var Job = require("../controllers/JobModelController.js");


// collect all job data
router.get("/all", (req, res)=> {

	console.log("api route job/all called.");

	Job.findAll((data)=> {
		console.log("ORM returned");
		console.log(data);
		res.json(data);
	});
});

// add new job
router.post("/add", (req, res)=> {

	console.log("api route job/add called.");

	//var job = req.body.job;
	//var postedBy = req.body.postedBy;
	//var skillRequired = req.body.skillRequired;
	// below for test only
	// var jobName = "car repair";
	// var postedBy = "123123";
	// var skillRequired = "automotive";
	// above for test only

	Job.add(jobName, postedBy, skillRequired, (data)=>{
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// apply for a job
router.post("/apply", (req, res)=> {
	var jobId = req.body.jobId;
	var applicantId = req.body.applicantId;
	Job.applyForAJob(jobId, applicantId, (data) =>{
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// confirm a job
router.post("/confirm", (req, res)=> {
	var jobId = req.body.jobId;
	Job.confirmAJob(jobId, (data)=> {
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// review a job
router.post("/review", (req, res)=> {
	var jobId = req.body.jobId;
	var reviewFromJobPoster = req.body.reviewFromJobPoster;
	Job.confirmAJob(jobId, reviewFromJobPoster, (data)=> {
		res.json(data); // actually frontend does not nned this returned obj
	});
});


// (job poster) cancel a job
router.post("/cancel_job", (req, res)=> {
	var jobId = req.body.jobId;
	Job.cancelAJob(req.body.jobId, (data)=>{
		res.json(data)
	});
});

// (applicant) withdraw an offer
router.post("/withdraw_offer", (req, res)=> {
	var jobId = req.body.jobId;
	Job.withdrawOffer(req.body.jobId, (data)=>{
		res.json(data)
	});
});

module.exports = router;
