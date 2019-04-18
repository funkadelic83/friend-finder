var express = require("express");
var path = require("path");
var serve = require('express-static');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        routeName: "mikedamanskis",
        name: "Mike Damanskis",
        picture: "https://yt3.ggpht.com/a-/AAuE7mAB95TO_OYZaTWlqgd8gupGnAivqV62jsYpFw=s900-mo-c-c0xffffffff-rj-k-no",
        a1: 5,
        a2: 5,
        a3: 5
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/allfriends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

