const express = require("express");
const router = express.Router();
const fs = require("fs");

var words =
  "shade ajar post suck eight elderly rail fluffy trucks female tawdry troubled stain opposite leather scrub crawl pin heady productive";

router.get("/", (req, res) => {
  var searchingWords = ("" + req.query.keywords).toLowerCase().split(',');
  const responseArray = [];
  
  for (var i = 0; i < searchingWords.length; i++) {
    if(words.includes(searchingWords[i])) {
        responseArray.push({"keyword" : ""+searchingWords[i], "status" : "found", "prefix": ""});
    } else {
        responseArray.push({"keyword" : ""+searchingWords[i], "status": "not_found", "prefix": "not_applicable"})
    }
  }

  responseArray.forEach(ele => {
    console.log(ele);
  });

  res.send("Solution2 is working");
});

module.exports = router;
