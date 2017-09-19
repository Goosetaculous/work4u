var JobModel = require("../models/JobModel.js");
var UserModel = require("../models/UserModel.js");

// ORM API
var JobModelController = {
    all: function(callback) {
    	JobModel.find({}, function(err, data) {
    		if (err) {
    			console.log(err);
    		}
    		else {
    			callback(data);
    		}
    	});
    },
    add: function(name, callback) {
        var newJob = new JobModel({name: name});
        newJob.save(function(err, data) {
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