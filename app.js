const express = require("express");
const noteRouter = require("./routes/noteRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/notes", noteRouter);

console.log("app", app.get("env"));

module.exports = app;
