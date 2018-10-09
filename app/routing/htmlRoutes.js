var path = require("path");

module.exports = function(app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });

    // app.get("/api/friends", function(req, res) {
    //     res.sendFile(path.join)
    // })

    app.get("*", function(req,res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
};