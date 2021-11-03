const express = require('express');

const {logcombination} = require('./../middleware/logging');

const router = express.Router();

router.get('/', logcombination, (req, res) => {
   return res.send("Hello from the logging routes");
});
 

module.exports = router;