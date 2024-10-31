var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/success", (req, res) => {
  res.status(200).send({ message: "Success" });
});

app.get("/error", (req, res) => {
  res.status(400).send({ error: "Bad Request, try again" });
});

module.exports = router;
