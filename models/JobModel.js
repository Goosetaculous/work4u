var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var JobSchema = new Schema({
    jobName: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    appliedBy: {
        type: String
    },
    currentApplicantName: {
        type: String
    },
    currentApplicantEmail: {
        type: String
    },
    applicants: {
      type: [String]
    },
    declined :{
      type: [String]
    },
    status: {
        type: String
    },
    jobType: {
        type: String
    },
    reviewFromJobPoster: {
        type: String
    },
    date:{
        type:String
    },
    location: {
        type: String
    },
    price:{
        type: Number,
        set: setPrice
    }

},{timestamps: {
    createdAt:"createdAt"
}
},{ versionKey: false });

function getPrice(num){
    return (num/100).toFixed(2)
}

function setPrice(num){
    return parseFloat(num).toFixed(2)
}

// Create the model with the Schema
var JobModel = mongoose.model("JobModel", JobSchema);
module.exports = JobModel;

// Status will: intiated , applied , confirmed , completed 


