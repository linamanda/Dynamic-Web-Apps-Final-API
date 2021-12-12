// Initialize Express Router
const express = require("express");
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// API Endpoint for submitting data through our form
router.get("/", (req, res) => {
  const queryParams = req.query;
  const { imgAlt, imgSrc, message, uid, username } = queryParams;

  // Error handling
  if (message === "") {
    throw "Post text cannot be empty";
  }

  // Submit post to Firebase
  const setPost = firestore.addDoc(firestore.collection(db, "posts"), {
    imgAlt,
    imgSrc,
    message,
    timestamp: firestore.Timestamp.now(),
    uid,
    username,
  });

  setPost
    .then((reponse) => {
      // If successful, send correct message
      res.send(response);
    })
    .catch((error) => {
      // If failure, send correct message
      console.warn(error);
      res.send(error);
    });
});

module.exports = router;
