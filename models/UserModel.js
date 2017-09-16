var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    accountName: {
        type: String,
        required: true,
    },
    jobsPostedByThisUser: {
        type: String
    },
    jobsThisUserApplied: {
        type: String
    }
});

// Create the model with the Schema
var UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;