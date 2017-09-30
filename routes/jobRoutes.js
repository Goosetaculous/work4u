var express = require("express");
var router = express.Router();
var path = require("path");
var Job = require("../controllers/JobModelController.js");
var User = require("../controllers/UserModelController.js");


// collect all job data
router.get("/all", (req, res)=> {

	console.log("api route job/all called.");

	Job.findAll((data)=> {
		console.log("ORM returned");
		console.log(data);
		res.json(data);
	});
});

//get all jobs NOT posted by the current user
router.get('/get/:id', Job.findJobsPostedbyOthers)

// Search a job by keyword
router.post('/search', Job.findJobsBySearch)

// add new job
router.post("/findByPosterId", (req, res)=> {

	console.log("api route job/findByPosterId called.");

	console.log("poster id is " + req.body.poster_id);

	Job.findJobsByPosterId(req.body.poster_id, (data) => {
		console.log("Found some");
		console.log("Obj in job route ");
		console.log(data);
		res.json(data);
	});
});

// add new job
router.post("/findJobsConfirmedByMe", (req, res)=> {

	console.log("api route job/findJobsConfirmedByMe called.");
	console.log("api route job/findJobsConfirmedByMe called.");
	console.log("api route job/findJobsConfirmedByMe called.");
	console.log(req.body);
	console.log("poster id is " + req.body.poster_id);

	Job.findJobsConfirmedByMe(req.body.poster_id, (data) => {
		console.log("Data from controller received by router");
		console.log(data);
		res.json(data);
	});
});

// add new job
router.post("/add", (req, res)=> {

	console.log("api route job/add called.");
	console.log(req.body);


	var jobName = req.body.jobName;
	var postedBy = req.body.postedBy;
	var jobType = req.body.jobType;
	var jobLocation = req.body.jobLocation;
	var jobDate = req.body.jobDate;
	var jobPrice = req.body.jobPrice;

	console.log("A1A21: ");
	console.log(jobName);


	Job.add(jobName, postedBy, jobType, jobLocation, jobDate, jobPrice, (data)=>{
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// apply for a job
router.patch("/apply", (req, res)=> {
	// var job_id = req.body.job_id;
	// var applicant_id = req.body.user_id
	var job_id = req.body.job_id;
	var applicant_id = req.body.user_id;
	console.log("===========================")
	console.log("apply route triggered")
	console.log("===========================")
	console.log("job ID collected: " + job_id);
	console.log("applicant ID collected: " + applicant_id);
	
	Job.applyForAJob(job_id, applicant_id, (data) =>{
		res.json(data); // actually frontend does not nned this returned obj
	});
});

// confirm a job
router.patch("/confirm", (req, res)=> {
	var job_id = req.body.job_id;
	Job.confirmAJob(job_id, (data)=> {
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

// (applicant) withdraw an offer
router.post("/withdraw_offer", (req, res)=> {
	Job.withdrawOffer(req.body.jobId, (data)=>{
		res.json(data)
	});
});

router.post("/recommended", Job.recommended);


// (job poster) cancel a job
router.post("/cancel_posting_and_applicant", (req, res)=> {
	let jobId = req.body.jobId;
	let applicantId = req.body.applicantId;
	Job.cancelAJob(jobId, (data)=>{
		res.json(data)
	});
	//User.getKickedOffFromAJob(applicantId);
});

router.post("/cancel_posting", (req, res)=> {
	console.log("API route cancel_posting hit");
	console.log("job is id ");
	console.log(req.body.jobId)
	Job.cancelAJob(req.body.jobId, (data)=>{
		console.log("cancel posting finished");
		console.log(data);
		res.json(data)
	});
});

router.post("/decline_application", (req, res) => {
	console.log("decline an application and mark job as initiated for applicantId");
	let applicantId = req.body.applicantId;
	let jobId = req.body.jobId;
	
	Job.kickApplicant(jobId, applicantId, (data) => {
		console.log("pppp");
		console.log(data);
	});
});

router.post("/confirm", (req, res) => {
	Job.confirmAJob(req.body.jobId, (data) => {
		res.json(data);
	});
});

router.post("/goodReview", (req, res) => {
	console.log("API route goodReview hit.");
	console.log(req.body.jobId);
	Job.goodReview(req.body.jobId, (data) => {
		res.json(data);
	});
});
router.post("/badReview", (req, res) => {
	console.log("API route badReview hit.");
	console.log(req.body.jobId);
	Job.badReview(req.body.jobId, (data) => {
		res.json(data);
	});
});

module.exports = router;
