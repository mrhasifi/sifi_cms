const express = require('express');

const postsController = require('../controllers/posts');

const posts_router = express.Router();

// GET /posts
posts_router.get('/posts', postsController.getPosts);

// POST /post
posts_router.post('/post', postsController.createPost);


posts_router.get('/posts/:post_id',postsController.getPosts);

module.exports = posts_router;