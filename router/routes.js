const express = require('express');
const path = require('path');

const mainController = require('../controller/mainController');

const router = express.Router();

router.get('/', mainController.getIndex);

router.get('/edit-note/:noteId', mainController.getEditNote);
router.post('/edit-note/:noteId', mainController.postEditNote)

router.get('/new-note', mainController.getNewNote);
router.post('/new-note', mainController.postNewNote);



module.exports = router;
