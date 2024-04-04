const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            required: true,
            default:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdefault&psig=AOvVaw00y35sNDTw2v3xyXgJhMl2&ust=1712286310411000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjo_9TJp4UDFQAAAAAdAAAAABAE",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
