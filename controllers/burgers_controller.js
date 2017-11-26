var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");//import model to use database function

router.get("/", function(req, res){
    //res.send("You made it to the index page!");
    console.log("Yes this route is working!!!!!");
    res.render('index');
});
router.post("/", function(req, res){

    console.log("You clicked the submit button!!");
    console.log(req.body);

})

module.exports = router;