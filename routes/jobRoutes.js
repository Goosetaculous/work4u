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

<<<<<<< HEAD
	//var job = req.body.job;
	//var postedBy = req.body.postedBy;
	//var skillRequired = req.body.skillRequired;
	// below for test only
	// var jobName = "car repair";
	// var postedBy = "123123";
	// var skillRequired = "automotive";
	// above for test only
	let jobName = req.body.jobName;
	let postedBy = req.body.postedBy;
	let jobSkills = req.body.jobSkills;
	let jobLocation = req.body.jobLocation;
	let jobDate = 	req.body.jobDate;
	let jobPrice = req.body.jobPrice;

=======
	var jobName = req.body.jobName;
	var postedBy = req.body.postedBy;
	var jobType = req.body.jobType;
	var jobLocation = req.body.jobLocation;
	var jobDate = req.body.jobDate;
	var jobPrice = req.body.jobPrice;
>>>>>>> 341171fd1f0ae57c0447ab31e75db1521034033c

	Job.add(jobName, postedBy, jobType, jobLocation, jobDate, jobPrice, (data)=>{
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// apply for a job
router.post("/apply", (req, res)=> {
	var job_id = req.body.job_id;
	var applicant_id = req.body.user_id;
	Job.applyForAJob(job_id, applicant_id, (data) =>{
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
