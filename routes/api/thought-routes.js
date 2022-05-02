const router = require("express").Router();
const {
  getAllThoughts,
  postThoughts,
  getThoughtById,
  updateThought,
  removeThought,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(postThoughts);
router.route("/:thoughtId").get(getThoughtById).put(updateThought);
router.route("/:thoughtId/:userId").delete(removeThought);

module.exports = router;
