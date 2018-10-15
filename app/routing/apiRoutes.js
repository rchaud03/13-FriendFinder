
var tableData = require("../data/friends");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);          
    });

app.post("/api/friends", function(req, res) {

    var userResponse = req.body.scores;

    var friendName = '';
    friendPicture = '';

    for (var i = 0; i < friendsArray.length; i++) {
        var delta = 0;

        for (var j = 0; j < userResponse.length; j++) {
            diff += Math.abs(friendsArray[i].scores[j]- userResponse[j]);
        }
    }
    friendsArray.push(req.body);
    res.json(true);
});
};