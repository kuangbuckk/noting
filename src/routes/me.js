//route
const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/clips', meController.storedClips);



module.exports = router;
