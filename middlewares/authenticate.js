const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!!!token) {
    return res.status(401).json({ data: "Chưa đăng nhập" });
  }
  jwt.verify(
    token.split(" ").pop(),
    "FINDMEET_TOKEN",
    function (error, decoded) {
      if (error) {
        return res.status(401).json({ data: "Token lỗi" });
      }
      req.user = decoded;
      next();
    }
  );
};

module.exports = authenticate;
