const { validationResult } = require('express-validator');

const Post = require('../models/post');
var comments = require('../models/comment');

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 5;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res
        .status(200)
        .json({
          message: 'Fetched posts successfully.',
          posts: posts,
          totalItems: totalItems,
          total_number_of_comments: 2
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};
  
exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
}


    const post_title = req.body.post_title;
    const post_body = req.body.post_body;
    const post = new Post({
        post_title: post_title,
        post_body: post_body,
        creator: { name: 'Hasifi' }
    });
    post
        .save()
        .then(result => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: result
        });
        })
        .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        });
};

exports.getPost = (req, res, next) => {
    const post_id = req.params.post_id;
    Post.findById(post_id)
        .then(post => {
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Post fetched.', post: post });
        })
        .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        });
};
    