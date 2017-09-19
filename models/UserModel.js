var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    auth0Id: {
        type: String,
        required: true
    }
});

// Create the model with the Schema
var UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;