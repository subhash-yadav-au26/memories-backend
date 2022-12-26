import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postSchema);
