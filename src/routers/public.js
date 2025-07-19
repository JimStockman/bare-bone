const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "JWHST", message: "Hello there!" });
});

router.get("/login", (req, res) => {
  console.log("to login");
  res.render("login");
});

router.post("/login", (req, res) => {
  // Get the request post passed
  console.log(req);
  res.render("login");
});

module.exports = router;
