const express = require("express");

const {
  createBlogPost,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blogPostController");
const routes = express.Router();
const { protect } = require("../middleware/protectRoutes");
routes.get("/blog", protect, getBlogPost);
routes.post("/blog", protect, createBlogPost);
routes.patch("/blog/:id", protect, updateBlogPost);
routes.delete("/blog/:id", protect, deleteBlogPost);

module.exports = routes;
