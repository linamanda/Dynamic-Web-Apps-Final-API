// Initialize Express
const express = require("express");
const app = express();

// Set up port for Heroku
const port = process.env.PORT || 4000;

// Import Firebase
const firebase = require("firebase/app");

// Get Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDwTKh2PPCoGiVl8yw_c-DAq_J-C19T4Lg",
  authDomain: "final-d6a70.firebaseapp.com",
  projectId: "final-d6a70",
  storageBucket: "final-d6a70.appspot.com",
  messagingSenderId: "991364086495",
  appId: "1:991364086495:web:6444ec6f7b30bedfd8c76a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createPostRoute = require("./routes/createPost.js");

// Express route usage
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
