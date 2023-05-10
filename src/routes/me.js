//route
const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/clips', meController.storedClips);
router.get('/bin/clips', meController.binClips);


module.exports = router;
