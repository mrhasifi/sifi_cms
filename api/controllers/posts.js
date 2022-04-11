exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [
        { 
          post_id: 1,
          post_title: 'First Post', 
          post_body: 'This is the first post!' , 
          total_number_of_comments: 1 
        },
        { 
            post_id: 2,
            post_title: 'Second Post', 
            post_body: 'This is the first post!' , 
            total_number_of_comments: 3 
        },
    ]
    });
  };
  
  exports.createPost = (req, res, next) => {
    const post_title = req.post_body.post_title;
    const post_body = req.post_body.post_body;
    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { 
          post_id: new Date().toISOString(), 
          post_title: post_title, 
          post_body: post_body }
    });
  };
  