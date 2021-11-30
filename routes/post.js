// Initialize Express Router
const express = require("express");
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// Get single post from firebase by ID
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const post = firestore.getDoc(firestore.doc(db, "posts", postId));
  post
    .then((response) => {
      const postData = response.data();
      if (postData) return res.send(postData);
      return res.send(`Post does not exist...`);
    })
    .catch((error) => {
      res.send();
    });
});

router.get("/", (req, res) => {
  res.send(`Please include an ID`);
});

module.exports = router;
