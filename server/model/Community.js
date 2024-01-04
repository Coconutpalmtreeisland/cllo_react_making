const mongoose = require("mongoose");

const cummuSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        commuNum: Number,
        // 이미지 여러 장 배열로 저장
        image: {
            type: Array,
            default: []
        },
        // User.js 값 가져오기
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        commuRepleNum: {
            type: Number,
            default: 0,
        }
    },
    { collection: "commus" }
);

const Community = mongoose.model("Community", cummuSchema);

module.exports = { Community };