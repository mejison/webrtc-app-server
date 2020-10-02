module.exports = (sequelize, Sequelize) => {
  const Chat = sequelize.define("chats", {
    sender_id: {
      type: Sequelize.STRING,
    },
    receiver_id: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.TEXT,
    },
  });

  return Chat;
};
