var express = require("express");
var path = require("path");
var serve = require('express-static');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friendsImport = require("./app/data/friends.js");

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
    friendsImport.friends.unshift(newfriend);
    res.json(newfriend);
    friendsImport.tryMe();
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

