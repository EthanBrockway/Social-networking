const { Schema, model } = require("mongoose");

ReactionSchema = {
  reactionId: {
    default: new Schema.Type.ObjectId(),
  },
};
// ReactionSchema = {
//   reactionId: {
//     type: Schema.Types.ObjectId,
//     default: new
//   },
// };
