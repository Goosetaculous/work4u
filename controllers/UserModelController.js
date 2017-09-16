var JobModel = require("./JobModel.js");
var UserModel = require("./UserModel.js");

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
    add: function(name, callback) {
        var newUser = new UserModel({name: name});
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