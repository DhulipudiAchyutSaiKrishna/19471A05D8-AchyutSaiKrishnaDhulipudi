const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Solution2 is working');
});

module.exports = router;