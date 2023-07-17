const JWT = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const user = require("../modules/UserAuth");
const JWT_SECRET = "sdfghjkl;lkjtyujhkliuh2345678@#$%^&*()dfghjk";
const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log("token problem", token);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = JWT.verify(token, JWT_SECRET);

      // Get user from the token
      req.user = await user.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
