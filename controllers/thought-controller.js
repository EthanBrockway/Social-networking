const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({}).then((dbThoughtData) => res.json(dbThoughtData));
  },
  getThoughtById({ params }, res) {
    console.log({ params });
    Thought.findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  postThoughts({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => {
        User.findOneAndUpdate(
          {
            _id: body.userId,
          },
          {
            $push: { thoughts: dbThoughtData._id },
          }
        );
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
