var express = require("express");
var router = express.Router();
const { randomBytes } = require("crypto");

const posts = [
  {
    id: "123abc",
    title: "A simple post",
  },
  {
    id: "678lki",
    title: "Another post",
  },
];

/* GET users listing. */

router.get("/posts", (req, res) => {
  res.send(posts);
});

router.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  const newPost = {
    id: id,
    title: title,
  };

  posts.push(newPost);

  res.status(201).json({ message: "Post created successfully", newPost });
});

module.exports = router;
