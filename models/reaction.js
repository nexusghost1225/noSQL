const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectIdID,
            default: () => new Types.OnjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Reaction = model("reaction" , reactionSchema);

module.exports = Reaction;