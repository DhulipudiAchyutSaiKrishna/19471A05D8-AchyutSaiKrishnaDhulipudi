const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    
    res.send('Solution2 is working');
});

module.exports = router;