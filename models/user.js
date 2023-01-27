const { Schema } = require("mongoose");

const userShema = new schema(
{
    userid: {
        type: Schema.Typer.ObjectId,
        default: () => new Types.ObjectId,
    },
    username: {
    type: String,
    required: true,
    trimmed:true
    },
    email:{
    type: String,
    required:true
    },
    thoughts: {

    },
    friends:{

    }
}


);

const User = model("user" , userSchema);

module.exports = User;