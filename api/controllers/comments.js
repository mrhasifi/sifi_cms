exports.getComments = (req, res, next) => {
    res.status(200).json({
      comments: [{ comment_id: 1 , comment: 'I am commenting' , user_id: 2 }]
    });
  };