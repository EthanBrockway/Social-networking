const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({}).then((dbThoughtData) => res.json(dbThoughtData));
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
