var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var JobSchema = new Schema({
    postedBy: {
        type: String,
        required: true
    },
    appliedBy: {
        type: String
    },
    status: {
        type: String
    },
    skillRequired: {
        type: String
    },
    reviewFromJobPoster: {
        type: String
    }
});

// Create the model with the Schema
var JobModel = mongoose.model("JobModel", JobSchema);
module.export = JobModel;