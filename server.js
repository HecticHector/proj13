const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

console.log("server", app.get("env"));

const db = require("./db/index.js");

const PORT = process.env.PORT || 5000;

db.connect().then(() => {
});

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
