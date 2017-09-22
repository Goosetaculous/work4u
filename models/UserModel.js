var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    given_name: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    skills: {
        type: [String]
    },
    jobsPostedByThisUser: {
        type: [String]
    },
    jobsThisUserApplied: {
        type: [String]
    },
});

// Create the model with the Schema
var UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;