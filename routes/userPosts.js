// Initialize Express Router
const express = require("express");
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// Get all posts from firebase
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  // Reference to posts documents
  const posts = firestore.getDocs(firestore.collection(db, "posts"));

  // Posts array
  const userPostsArray = [];

  // Get posts JSON from Firebase
  posts
    .then((response) => {
      response.forEach((doc) => {
        if (doc.data().uid == userId) userPostsArray.push(doc.data());
      });
      return res.send(userPostsArray);
    })
    // Handle errors
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
