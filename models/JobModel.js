var mongoose = require("mongoose");

// Create Schema class
var JobSchema = mongoose.Schema;
var JobSchema = new Schema({
    postedBy: {
        type: Integer,
        required: true,
    },
    appliedBy: {
        type: Integer
    },
    status: {
        type: String
    },
    reviewFromJobPoster: {
        type: Integer
    }
});

// Create the model with the Schema
var JobModel = mongoose.model("JobModel", JobSchema);
module.export = JobModel;