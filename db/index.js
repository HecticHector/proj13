const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// const CONNECTION_URL = 'mongodb+srv://pud6matad:pud6matadpud6matadpud6matadpud6d@cluster0.zu8k1.mongodb.net/booksdb?retryWrites=true&w=majority';

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      })
      .then((res, err) => {
        if (err) return reject(err);
        // console.log(mongoose.connections);
        resolve();
      });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
