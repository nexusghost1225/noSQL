const { Schema } = require("mongoose");

const thoughtsSchema = new schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {

        }
    }
);

const Thoughts = model("thoughts" , thoughtsSchema);

module.exports = Thoughts;