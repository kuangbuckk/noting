//route
const express = require('express');
const router = express.Router();

const clipController = require('../app/controllers/ClipsController');

router.get('/create', clipController.create);
router.post('/store', clipController.store);
router.get('/:id/edit', clipController.edit);
router.put('/:id', clipController.update);
router.delete('/:id', clipController.delete); //2: chọc vào phương thức override delete và hàm delete của Controller
router.get('/:slug', clipController.show);


module.exports = router;
