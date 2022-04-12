const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment_id: {
      type: Object
    },
    comment_body: {
      type: String,
      required: true
    },
    comment_creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
