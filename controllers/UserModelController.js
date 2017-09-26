var JobModel = require("../models/JobModel.js");
var UserModel = require("../models/UserModel.js");

// ORM API
var UserModelController = {
    all: (req, res)=> {
        UserModel.find({}, function(err, data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },


    add: (req, res)=> {

        // first, check if the user has already been added
        //UserModel.findOne({user_id: userObj.user_id}, function(err, data) {
        UserModel.findOne({sub: req.body.user.sub}, function(err, data) {

            console.log("add() of Controller is called.");
            console.log(data);

            //console.log("=============body==================")
            //console.log(req.body)
            //console.log("=============body==================")
            
            if (!data) {
                // console.log(userObj);
                console.log("User has not been created before. Now storing it to DB.");
                UserModel.create(req.body.user).then(function(doc) {
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

    getuser: function(req, res) {

        console.log("=====================================")
        console.log("get user by id route triggered")
        console.log("=====================================")
        
        UserModel.find({
          sub: req.params.id
        }).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
      },

    // adding post to user Post Array
    addpost: (req,res)=>{
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
    appliedpost: (req,res)=>{
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

    // adding skill to User
    addskill: (req,res)=>{
        console.log("add skill method triggered")
        console.log(req.body)
        var newSkill = req.body.skill;
        var user = req.body.user_id;
      
        UserModel.update(
            {sub: user},
            {$push: {skills: newSkill}},
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // Remove skill from User array
    removeskill: (req,res)=>{
        console.log("=====================================")
        console.log("remove skill method triggered")
        console.log("=====================================")

        console.log(req.body)
        var removeSkill = req.body.skill;
        var user = req.body.user_id;
      
        UserModel.update(
            {sub: user},
            {$pullAll: {skills: [removeSkill] }},
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // add skill array from User array
    addskillarray: (req,res)=>{
        console.log("=====================================")
        console.log("add skill array method triggered")
        console.log("=====================================")

        console.log(req.body)
        var skillArray = req.body.skillarray.skillarray;
        var user = req.body.skillarray.user_id;
      
        UserModel.update(
            {sub: user},
            {$set: {skills: skillArray }},
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

     applied: function(req, res) {

        console.log("=====================================")
        console.log("Get all applied by user function")
        console.log("=====================================")
        
        UserModel.find({
          sub: req.body.job_id
        }).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
      },



}

module.exports = UserModelController;


