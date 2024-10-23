const express = require("express");
// const { randomBytes } = require("crypto");
const cors = require("cors");
// const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const posts = [];

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

  // await axios.post("http://localhost:3005/events", {
  //   type: "PostCreated",
  //   data: newPost,
  // });

  res.status(201).json({ message: "Post created successfully", newPost });
});

// app.post("/events", (req, res) => {
//   console.log("Received event", req.body.type);

//   res.send({});
// });

app.listen(PORT, () => {
  console.log(`Posts app runnning on port ${PORT}`);
});
