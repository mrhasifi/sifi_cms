const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post_id: {
      type:Object
    },
    post_title: {
      type: String,
      required: true
    },
    post_body: {
      type: String,
      required: true
    },
    creator: {
        type: Object,
        required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);

