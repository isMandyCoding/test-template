//Importing and creating an instance of express
const express = require("express");

const mongoose = require("mongoose");
const app = express();

// Gets the Username and Password
const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

// Creating the connect function
console.log("Connecting to MongoDB...");
const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully")) // Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message); // Logs out the error message if it encounters any.
    });
};

// Calling the Connect Function
connectDB();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h5>Welcome Friends</h5>");
});

app.get("/ping", (req, res) => {
  res.json({
    greeting: "pong",
  });
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
