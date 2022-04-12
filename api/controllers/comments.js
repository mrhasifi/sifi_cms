exports.getComments = (req, res, next) => {
    res.status(200).json(
      {
      comments: [
        { comment_id: 1 , 
          comment_body: 'I am commenting' , 
          comment_creator: 2 
        },
        { comment_id: 2 , 
          comment_body: 'I am commenting' , 
          comment_creator: 3 
        },
        ],
        total_number_of_comments: 2
    });
  };

  exports.getComment = (req, res, next) => {
    res.status(200).json(
      {
      comments: 
        { comment_id: 1 , 
          comment_body: 'I am commenting' , 
          comment_creator: 2 
        }
    });
  };