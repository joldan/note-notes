const express = require('express');
const path = require('path');

const mainController = require('../controller/mainController');

const router = express.Router();

router.get('/', mainController.getIndex);

router.get('/edit-note', mainController.getEditNote);

router.get('/new-note', mainController.getNewNote);


module.exports = router;
