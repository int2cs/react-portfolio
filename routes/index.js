const router = require("express").Router();
const mongoost = require("mongoose");
const projects = require("../database/models/projectModel");

router.get("/", async (req, res) => {
  projects
    .find({})
    .exec()
    .then((data) => res.send(data));

  // res.send("hello world !");
});

module.exports = router;
