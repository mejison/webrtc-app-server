const jwt = require("jsonwebtoken");
const config = require("../config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  token = token.replace("Bearer", "").trim();

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    User.findOne({
      id: decoded.id,
    }).then((user) => {
      req.user = user;
      next();
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
