var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var JobSchema = new Schema({
    postedBy: {
        type: Number,
        required: true,
    },
    appliedBy: {
        type: Number
    },
    status: {
        type: String
    },
    reviewFromJobPoster: {
        type: Number
    }
});

// Create the model with the Schema
var JobModel = mongoose.model("JobModel", JobSchema);
module.export = JobModel;