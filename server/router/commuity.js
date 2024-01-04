const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Community } = require("../model/Community.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

const setMultiUpload = require("../util/multiUpload.js");

router.post("/write", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.commuNum = counter.commuNum; // 번호 추가

            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id; // 작가 추가

                    const BlogWrite = new Post(temp);
                    BlogWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                                res.status(200).json({ success: true });
                            })
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 이미지 업로드
router.post("/image/upload", setUpload("cllo-community/post"), (req, res, next) => {
    let filePathArray = req.files.map(file => file.location);  // req.files를 사용하고, 업로드된 파일들의 url을 배열로 저장
    res.status(200).json({ success: true, filePath: filePathArray })  // filePath를 배열로 반환
})


module.exports = router;