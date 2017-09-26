var UserModel = require("../models/UserModel.js");

// ORM API
var UserModelController = {
    /**
     * Grab ALL users
     */
    all: (req, res)=> {
        UserModel.find({}, (err, data)=> {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },
    /**
     * @param req.body.user.sub
     * Check if the user exist in the database.
     * Create user entry on the db if does not exist
     */
    add: (req, res)=> {
        UserModel.findOne({sub: req.body.user.sub}, (err, data)=> {
            if (!data) {
                UserModel.create(req.body.user).then((doc)=> {
                    res.json(doc);
                }).catch(function(err) {
                    res.json(err);
                });
            } else {
                console.log("User has already been created before.")
            }
        }).catch(function(err) {
            res.json(err)
        });
    },
    /**
     * @param req.params.id
     * Return a user based on sub from the db
     */
    getuser: (req, res)=> {
        UserModel.find({
          sub: req.params.id
        }).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
      },
    /**
     * Adding post to user Post Array
     */
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
    /**
     * Updates the user's jobs applied
     * @param req
     * @param res
     */
    // appliedpost: (req,res)=>{
    //     var newPost = req.body.post;
    //     var user = req.body.user_id;
    //
    //     UserModel.update(
    //         {user_id: user},
    //         {$push: {jobsThisUserApplied: newPost}},
    //         req.body
    //     ).then(function(doc) {
    //         res.json(doc);
    //     }).catch(function(err) {
    //         res.json(err);
    //     });
    // },

    /**
     *
     * Update the Skill array from the db
     */
    addskillarray: (req,res)=>{
        console.log(req.body)
        UserModel.update(
            {_id: req.body.skillarray.user_id},
            {$set: {skills: req.body.skillarray.skillarray }},
            req.body
        ).then(function(doc) {
            console.log("SUCCESS BITCHES")
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


