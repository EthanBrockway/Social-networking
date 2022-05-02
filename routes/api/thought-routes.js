const router = require("express").Router();
const {
  getAllThoughts,
  postThoughts,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(postThoughts);

module.exports = router;
