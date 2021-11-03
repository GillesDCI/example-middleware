const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   return res.send("Hello from the user routes");
});




module.exports = router;