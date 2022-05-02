const router = require("express").Router();
const {
  getAllThoughts,
  postThoughts,
  getThoughtById,
  updateThought,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(postThoughts);
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

module.exports = router;
