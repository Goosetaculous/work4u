var JobModel = require("../models/JobModel.js");
var UserModel = require("../models/UserModel.js");

// ORM API
var JobModelController = {
    findAll: function(callback) {
    	JobModel.find({}, function(err, data) {
    		if (err) {
    			console.log(err);
    		}
    		else {
    			callback(data);
    		}
    	});
    },
    addOne: function(job, callback) {

        var postedBy = job.postedBy; // a string
        var skillRequired = job.skillRequired; // a string

        postedBy = "12323132142143";
        skillRequired = "mechanic";

        var newJob = new JobModel({
            postedBy: postedBy,
            appliedBy: "",
            status: "started",
            skillRequired: skillRequired,
            reviewFromJobPoster: ""
        });
        console.log("New Job" + newJob);
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
    applyForAJob: function(applicantId, jobId, callback) {

        JobModel.findOneAndUpdate({_id: jobId}, {$set: {appliedBy: applicantId}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    confirmAJob: function(jobId, callback) {

        JobModel.findOneAndUpdate({_id: jobId}, {$set: {status: "confirmed"}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
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
        User.findOneAndRemove({_id: jobId}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    reviewAJob: function(jobId, reviewFromJobPoster, callback) {
        JobModel.findOneAndUpdate({_id: jobId}, {$set: {status: "started"}}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    }
}

module.exports = JobModelController;

//  display all jobs, add 1 job,  display 1 unique job, 