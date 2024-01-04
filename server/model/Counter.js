const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
    {
        name: String,
        commuNum: Number,
        userNum: Number,
    },
    { collection: "counter" }
);

const Counter = mongoose.model("Counter", countSchema);

module.exports = { Counter };