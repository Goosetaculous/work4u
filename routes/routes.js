var express = require("express");
var router = express.Router();
var path = require("path");
var models = require("../models/models.js");

/* GET users listing. */
router.get("/123", function(req, res) {
	console.log("/123 called");
	models.removeAll(function(data) {
		models.add("Andy", function(data) {
			models.all(function(data) {
				console.log(data);
				res.json(data);
			});
		});
	});

	/*res.json([{
		id: 1,
		username: "samsepi0l"
	}, {
		id: 2,
		username: "D0loresH4ze"
	}]);*/
});

router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

module.exports = router;
