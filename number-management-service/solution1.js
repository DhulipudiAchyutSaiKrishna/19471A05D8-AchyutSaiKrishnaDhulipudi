const express = require('express');
const router = express.Router();
var urlValidation = require('valid-url');
const { request } = require('http');
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const queriesArray = req.query.url.toString().split(',');
    const validRequestsArray = [];
    var numberArrays = [];
    for(let i = 0; i < queriesArray.length; i++) {
        if(urlValidation.isHttpUri(queriesArray[i])) {
            validRequestsArray.push(queriesArray[i]);
            const response = await fetch(queriesArray[i]);
            const data = await response.json();
            numberArrays.push(data.numbers);
        }
    }

    validRequestsArray.forEach(query => {
        console.log('valid ' + query);
    });

    // const uniqueArray = await [...new Set(numberArrays)];
    let uniqueArray  = Array.prototype.concat.apply([], numberArrays);
    uniqueArray = [...new Set(uniqueArray)];
    
    console.log('uniqueArray: ', uniqueArray);

    

    console.log('numberArrays: ', numberArrays);

    uniqueArray = uniqueArray.toString().split(',').map(Number);

    uniqueArray.sort((a, b) => a - b);

    res.send(uniqueArray);
});


module.exports = router;