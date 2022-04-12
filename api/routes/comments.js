const express = require('express');

const commentsController = require('../controllers/comments');

const comments_router = express.Router();

comments_router.get('/all', commentsController.getComments);

module.exports = comments_router;