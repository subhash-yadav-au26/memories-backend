import { Post } from "../../database/model/postSchema";

export class PostHelpers {
  public static findAll = async () => {
    return await Post.find();
  };

  public static findOne = async (id) => {
    return await Post.findById(id);
  };

  public static create = async (document) => {
    return await Post.create(document);
  };

  public static findByIDAndUpdate = async (id, postData) => {
    return await Post.findByIdAndUpdate(id, postData, { new: true });
  };

  public static updateLikePost = async (id) => {
    const post = await Post.findById(id);
    return Post.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
  };

  public static findByIdAndDelete = async (id) => {
    return Post.findByIdAndDelete(id);
  };
}
