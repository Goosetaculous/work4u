var UserModel = require("../models/UserModel.js");
var JobModel = require("../models/JobModel.js");


// ORM API
var JobModelController = {
    findAll: function(callback) {
    	JobModel.find({}, function(err, data) {
    		if (err) {
    			console.log(err);
    		}
    		else {
                console.log("DB returned");
                console.log(data);
    			callback(data);
    		}
    	});
    },
    /**
     *
     * @param req.params.id - current _id of logged in user
     * @param All jobs NOT posted by current user and has not applied yet
     *
     */

    findJobsPostedbyOthers: (req,res)=>{
        JobModel.find({
            postedBy : {$ne: req.params.id},
            status:"initiated",
            declined: {$nin: [req.params.id]}
            //applicants: {$nin: [req.params.id]}
        },(err,data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    },
    /**
     *
     * @param req - term and user id
     *
     * Get the search term and look for it in all fields excluding stuff you posted
     */

    findJobsBySearch: (req,res)=>{
        let term = new RegExp(req.body.term, 'i')
        console.log(term)
        JobModel.find({
            // postedBy : {$ne: req.params.id},
            // status:"initiated"
            $and: [
                {postedBy : {$ne: req.body.id}},
                {applicants: {$nin: [req.body.id]}},
                {$or: [
                        {jobName:{$regex: term} },
                        {location:{$regex: term}},
                        {date:{$regex: term}}
            
                    ]
                }
            ]
        },(err,data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })



    },



    findJobsByPosterId: function(postedId, callback) {
        console.log("Controller: get jobs with poster " + postedId);
        JobModel.find({postedBy: postedId}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("A2A2");
                console.log(data);
                callback(data);
            }
        });
    },
    add: function(jobName, postedBy, jobType, jobLocation, jobDate, jobPrice, image_url, callback) {

        console.log("DB controller add() called.");

        if(image_url == ""){
            image_url="https://c1.staticflickr.com/9/8060/8157253058_3ff9faf7b5_b.jpg"
        }

        var newJob = new JobModel({
            jobName: jobName,
            postedBy: postedBy,
            appliedBy: "",
            status: "initiated",
            jobType: jobType,
            location: jobLocation,
            date: jobDate,
            price: jobPrice,
            reviewFromJobPoster: "",
            image_url: image_url
        });

        console.log("Adding below job to DB.");
        console.log(newJob);
        
        newJob.save(function(err, data) {
            
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
        //
    },
    applyForAJob: function( jobId,applicantId, callback) {
        console.log("in controller : apply for job controller triggered")
        console.log(jobId);
        console.log(applicantId);

        UserModel.find({_id: applicantId}, function(err, data) {
            let applicantName = data.name;
            console.log("Applicant NAME: ");
            console.log(applicantName);
            JobModel.update({_id: jobId}, 
                { $set: 
                    { 
                        appliedBy: applicantId,
                        status: "applied",
                        currentApplicantName: applicantName,
                        $push: {applicants: applicantId}
                    }
                }, 
                function(err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    callback(data);
                }
            });
        });
    },
    confirmAJob: function(jobId, callback) {

        JobModel.update({_id: jobId}, 
            {$set: 
                {
                    status: "confirmed"
                }
            }, 
            function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    findJobsConfirmedByMe: function(poster_id, callback) {
        console.log("Job controller tries to find confirmed jobs for " + poster_id);
        JobModel.find({postedBy: poster_id, status: "confirmed"}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        })
    },

    reviewAJob: function(jobId, reviewFromJobPoster, callback) {
        JobModel.findOneAndUpdate({_id: jobId}, {$set: {reviewFromJobPoster: reviewFromJobPoster}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    cancelAJob: function(jobId, callback) {
        console.log("controller cancel a job hit");
        console.log(jobId);
        JobModel.findOneAndRemove({_id: jobId}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("callback in controller hit");
                callback(data);
            }
        });
    },
    recommended: (req,res) => {
        console.log("=======Get Recommended Jobs Triggered======");
        console.log(req.body.skills);
        console.log(req.body)

        JobModel.find({ 
            jobType: {$in: req.body.skills},
            status: "initiated",
            postedBy:  {$ne: req.body.user_id}
        }).then(function( data){
            console.log(data)
            res.json(data);
        });
    },
    kickApplicant: (jobId, applicantId, callback) => {
        console.log("remove an applicant and mark job as INITIATED");
        console.log(jobId);

        JobModel.findOneAndUpdate({_id: jobId}, {$set: {appliedBy: "", status: "initiated", currentApplicantName: ""}, $push: {declined: applicantId}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                UserModel.update(
                    {_id: applicantId},
                    {$pull: { jobsThisUserApplied: jobId} })
                .then(function(doc) {
                    callback(data);
                });
                
            }
        });
    },
    goodReview: (jobId, callback) => {
        console.log("Controller goodReview hit.");
        console.log(jobId);
        JobModel.findOneAndUpdate({_id: jobId}, {$set: {status: "positiveReviewed"}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Changed status to goodReview");
                callback(data);
            }
        });
    },
    badReview: (jobId, callback) => {
        console.log("Controller goodReview hit.");
        console.log(jobId);
        JobModel.findOneAndUpdate({_id: jobId}, {$set: {status: "negativeReviewed"}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Changed status to bddReview");
                callback(data);
            }
        });
    },
}

module.exports = JobModelController;

//  display all jobs, add 1 job,  display 1 unique job, 