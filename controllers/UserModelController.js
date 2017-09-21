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

        console.log("DB qeuery initiated.");
        /*var userObj = {
            given_name: "jon" ,
            family_name: "doe",
            name: "jon doe",
            user_id: "google123",
            skills: [],
            jobsPostedByThisUser: [] ,
            jobsThisUserApplied:[]
            
        };
        console.log(userObj);*/

        // first, check if the user has already been added
        //UserModel.findOne({user_id: userObj.user_id}, function(err, data) {
        UserModel.findOne({user_id: req.body.user_id}, function(err, data) {

            console.log("123321");
            console.log(data);
            
            if (!data) {
                console.log(userObj);
                console.log("User has not been created before. Now storing it to DB.");
                UserModel.create(userObj).then(function(doc) {
                    console.log("creating finished");
                    res.json(doc);
                }).catch(function(err) {
                    res.json(err);
                });
            }
            else {
                console.log("User has already been created before.")
            }
        }).catch(function(err) {
            res.json(err)
        });
    },

    // adding post to user Post Array
    addpost: function(req,res){
        var newPost = req.body.post; 
        var user = req.body.user_id;

        UserModel.update(
            {user_id: user},
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
            {user_id: user},
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


