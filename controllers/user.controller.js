const db = require("../models");
const User = db.user;

exports.me = (req, res) => {
  res.json(req.user);
};

exports.all = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
