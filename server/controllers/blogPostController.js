const asyncHandler = require("express-async-handler");
const BlogPost = require("../modules/BlogPost");
const User = require("../modules/UserAuth");

exports.createBlogPost = asyncHandler(async (req, res) => {
  const { title, image, description } = req.body;
  console.log(req.body);
  if (!title || !image || !description) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const blog = await BlogPost.create({ title, image, description });
  res.status(200).json({
    status: "success",
    post: blog,
  });
});
exports.getBlogPost = asyncHandler(async (req, res) => {
  const blogs = await BlogPost.find();
  res.status(200).json({
    status: "success",
    post: blogs,
  });
});
exports.updateBlogPost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const post = await BlogPost.findById(id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  const updatepost = await BlogPost.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatepost);
});
exports.deleteBlogPost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const post = await BlogPost.findById(id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  await post.remove();
  res.json({ id: post._id });
});
