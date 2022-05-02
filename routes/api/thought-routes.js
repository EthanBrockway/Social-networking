const router = require("express").Router();
const {
  getAllThoughts,
  postThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(postThoughts);
router.route("/:thoughtId").get(getThoughtById);

module.exports = router;
