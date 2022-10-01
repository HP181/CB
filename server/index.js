const express = require("express");
const App = express();

const User = require("./models/userData");

const path = require("path");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./connection/db");

App.use(express.json());

App.use(express.static("static"));


App.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const sendData = async () => {
    if (!name || !email || !message) {
      return res.status(421).send({ message: "please enter all fields" });
    }

    const user = new User({ name, email, message });

    const UserSaved = await user.save();

    if (UserSaved) {
      return res.status(201).json({ message: "User created successfuslly 😁" });
    }
  };

  await sendData();
});


App.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

App.listen(process.env.port, () => {
  console.log("Connected on", process.env.port);
});
