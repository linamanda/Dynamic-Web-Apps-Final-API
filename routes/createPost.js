// Initialize Express Router
const express = require("express");
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// TODO: Create new post

module.exports = router;
