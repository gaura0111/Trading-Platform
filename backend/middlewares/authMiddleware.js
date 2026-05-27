const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "Token not found" });
  }
  jwt.verify(token, process.env.TOKEN_KEY || "secret_key", async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Token verification failed" });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    }
  });
};
