const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
// const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

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

app.get("/success", (req, res) => {
  res.status(200).send({ message: "Success" });
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  const newPost = {
    id: id,
    title: title,
  };

  posts.push(newPost);

  res.status(201).json({ message: "Post created successfully", newPost });
});

app.get("/error", (req, res) => {
  res.status(400).send({ error: "Bad Request, try again" });
});

app.listen(PORT, () => {
  console.log(`Posts app runnning on port ${PORT}`);
});
