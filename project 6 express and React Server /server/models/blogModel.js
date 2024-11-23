const mongoose = require("mongoose");

const Blog = mongoose.model("Blog", {
  title: String,
  description: String,
  blogImageUrl: String,
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String },
    },
  ],
});

module.exports = { Blog };
