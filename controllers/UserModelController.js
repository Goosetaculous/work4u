var JobModel = require("../models/JobModel.js");
var UserModel = require("../models/UserModel.js");

// ORM API
var UserModelController = {
    all: function(callback) {
    	UserModel.find({}, function(err, data) {
    		if (err) {
    			console.log(err);
    		}
    		else {
    			callback(data);
    		}
    	});
    },
    add: function(userObject, callback) {

        console.log(userObject);
        var newUser = new UserModel({
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            accountName: userObject.accountName });

        console.log("Creating a new user:")
        console.log(newUser)

        console.log("===============================")
        console.log("===============================")

        newUser.save(function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    removedByName: function(name, callback) {
        UserModel.findOneAndRemove({name: name}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    removeAll: function(callback) {
        UserModel.remove(function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    }
}

module.exports = UserModelController;