const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.post('/notes', noteController.createNote);
router.post('/notes/bulk', noteController.createBulkNotes);
router.get('/notes', noteController.getAllNotes);
router.delete('/notes/bulk', noteController.deleteBulkNotes);
router.get('/notes/:id', noteController.getNoteById);
router.put('/notes/:id', noteController.replaceNote);
router.patch('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;