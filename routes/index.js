var express = require("express");
const { request } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/success", (req, res) => {
  res.status(201).send({ message: "Success" });
});

router.get("/error", (req, res) => {
  res.sendStatus(400).send({ error: "Bad Request, try again" });
});

module.exports = router;
