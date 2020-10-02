module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "x7liruk",
  DB: "wetrtc-app-db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  secret: "bezkoder-secret-key",
};
