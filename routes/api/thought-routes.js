const router = require("express").Router();
const {
  getAllThoughts,
  postThoughts,
  getThoughtById,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(postThoughts);
router.route("/:thoughtId").get(getThoughtById).put(updateThought);
router.route("/:thoughtId/:userId").delete(removeThought);
router.route("/:thoughtId/reaction").post(addReaction);
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
