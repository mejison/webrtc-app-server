const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pusher = new Pusher({
  appId: "1083862",
  key: "d587330e72dd836c4532",
  secret: "e506a07d33ea928e9d6e",
  cluster: "eu",
});

app.use(function (req, res, next) {
  req.pusher = pusher;
  next();
});

app.get("/sync-db", function (req, res) {
  db.sequelize.sync();
  res.json({ message: "Successfuly sync db" });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/chat.routes")(app);

// app.post("/api/trigger", (req, res) => {
//   pusher.trigger("my-channel", "my-event", {
//     message: "hello world",
//   });
//   res.json({ message: "Succeessfuly triggered!" });
// });

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
