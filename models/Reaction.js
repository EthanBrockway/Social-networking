const { Schema, model } = require("mongoose");

ReactionSchema = {
  reactionId: {
    default: new Schema.Type.ObjectId(),
  },
};
