// Initialize Express Router
const express = require("express");
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// Get all posts from firebase
router.get("/", (req, res) => {
  // Reference to posts documents
  const posts = firestore.getDocs(firestore.collection(db, "posts"));

  // Posts array
  const postsArray = [];

  // Get posts JSON from Firebase
  posts
    .then((response) => {
      response.forEach((doc) => {
        const docData = doc.data();
        docData.pid = doc.id;
        postsArray.push(docData);
      });
      return res.send(postsArray);
    })
    // Handle errors
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
