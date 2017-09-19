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
        UserModel.create(req.body).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // adding post to user Post Array
    addpost: function(req,res){
        UserModel.update(
            {auth0Id: req.params.id},
            {$push: {jobsPostedByThisUser: newPost}
        },
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
}

module.exports = UserModelController;


