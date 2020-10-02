exports.getMyChats = (req, res) => {
  const user = req.user;
  res.json(user.getChats());
};
