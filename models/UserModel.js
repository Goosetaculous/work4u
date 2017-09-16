var mongoose = require("mongoose");

// Create Schema class
var UserSchema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    acountName: {
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