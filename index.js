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

// Allow CORS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next middleware
  next();
});

// Routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createPostRoute = require("./routes/createPost.js");
const userPostsRoute = require("./routes/userPosts.js");

// Express route usage
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createPostRoute);
app.use("/user", userPostsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
