const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeControllers.js')

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add',storeController.createStore)
module.exports = router;
