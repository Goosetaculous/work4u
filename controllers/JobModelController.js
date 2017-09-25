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
                console.log("DB returned");
                console.log(data);
    			callback(data);
    		}
    	});
    },
    add: function(jobName, postedBy, jobType, jobLocation, jobDate, jobPrice, callback) {

        console.log("DB controller add() called.");

        var newJob = new JobModel({
            jobName: jobName,
            postedBy: postedBy,
            appliedBy: "",
            status: "initiated",
            type: jobType,
            location: jobLocation,
            date: jobDate,
            price: jobPrice,
            reviewFromJobPoster: ""
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
        console.log("apply for job controller triggered")
        console.log(jobId);
        console.log(applicantId);

        JobModel.update({_id: "59c863ff590bfd1f634bafc8"}, 
            { $set: 
                { 
                    appliedBy: applicantId, 
                    status: "applied"
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
        JobModel.findOneAndUpdate({_id: jobId}, {$set: {status: "reviewed"}}, function(err, data) {
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