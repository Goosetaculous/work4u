var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var UserSchemaa = new Schema({
  // title is a required string
  name: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var User = mongoose.model("User", UserSchemaa);

// ORM API
var models = {
    all: function(callback) {
    	User.find({}, function(err, data) {
    		if (err) {
    			console.log(err);
    		}
    		else {
    			callback(data);
    		}
    	});
    },
    add: function(name, callback) {
        var newUser = new User({name: name});
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
        User.findOneAndRemove({name: name}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    },
    removeAll: function(callback) {
        User.remove(function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                callback(data);
            }
        });
    }
}

// Export the model
module.exports = models;