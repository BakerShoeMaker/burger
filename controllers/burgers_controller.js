var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");//import model to use database function

router.get("/", function(req, rest){
    app.send("You made it to the index page!");

});

module.exports = router;