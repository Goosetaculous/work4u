var JobModel = require("../models/JobModel.js");
var UserModel = require("../models/UserModel.js");

// ORM API
var UserModelController = {
    all: function(req, res) {
        UserModel.find({}, function(err, data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },


    add: function(req, res) {
        var userObj = {
            firstName: "jon" ,
            lastName: "doe",
            skills: [],
            jobsPostedByThisUser: [] ,
            jobsThisUserApplied:[],
            auth0Id: "google123"
        };
        console.log(req.body)

        //create custom user object - to be added//

        UserModel.create(userObj).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // adding post to user Post Array
    addpost: function(req,res){
        var newPost = req.body.post; 
        var user = req.body.user_id;

        UserModel.update(
            {auth0Id: user},
            {$push: {jobsPostedByThisUser: newPost}},
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // adding post to user Post Array
    appliedpost: function(req,res){
        var newPost = req.body.post;
        var user = req.body.user_id;

        UserModel.update(
            {auth0Id: user},
            {$push: {jobsThisUserApplied: newPost}},
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

}

module.exports = UserModelController;


