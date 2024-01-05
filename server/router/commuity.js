const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Community } = require("../model/Community.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

const setMultiUpload = require("../util/multiUpload.js");

// 글 쓰기
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

                    const BlogWrite = new Community(temp);
                    BlogWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { commuNum: 1 } }).then(() => {
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

// 글 목록
router.post("/list", (req, res) => {
    Community
        .find()
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, community: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 상세페이지
router.post("/detail", (req, res) => {
    console.log(req.body);
    Community
        .findOne({ commuNum: req.body.commuNum })
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, community: result });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 수정하기
router.post("/modify", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content
    }
    Community.updateOne({ commuNum: Number(req.body.commuNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 이미지 여러 장 업로드
router.post("/image/multiUpload", setMultiUpload("cllo-community/post"), (req, res, next) => {
    let filePathArray = req.files.map(file => file.location);  // req.files를 사용하고, 업로드된 파일들의 url을 배열로 저장
    res.status(200).json({ success: true, filePath: filePathArray })  // filePath를 배열로 반환
})


module.exports = router;