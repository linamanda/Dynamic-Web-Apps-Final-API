// Initialize Express Router
const express = require("express");
const router = express.Router();

// Create form for submitting
const form = `
    <h1>Create Post</h1>
    <form action="/create/submit">
        <div style="
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            max-width: 325px;
        ">
            <label for="postText">
            Post Text
            </label>
            <input type="text" name="postText" placeholder="Post text" />

            <label for="author">
            Author
            </label>
            <input type="text" name="author" placeholder="Username" />
        </div>
        <button type="submit">Submit Post</button>
    </form>
`;

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// Serve web form for users
router.get("/", (req, res) => {
  res.send(form);
});

// API Endpoint for submitting data through our form
router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const text = queryParams.postText;
  const author = queryParams.author;
  const date = new Date();
  const dateTime =
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDay() +
    "-" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  // Create ID from author and date
  const idFromAuthorDate = author + "-" + dateTime;

  // Error handling
  if (text === "") {
    throw "Post text cannot be empty";
  }

  // Submit post to Firebase
  const setPost = firestore.setDoc(
    firestore.doc(db, "posts", idFromAuthorDate),
    {
      text,
      author,
      date,
    }
  );

  setPost
    .then((reponse) => {
      // If successful, send correct message
      res.send(`
            <h1>Submission successful!</h1>
            <p><a href="/create">Add Another Post</a></p>
        `);
    })
    .catch((error) => {
      // If failure, send correct message
      console.warn(error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
