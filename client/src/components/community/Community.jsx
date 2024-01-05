import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommuSwiper from "../../util/CommuSwiper";

// import c01Img from "../../assets/img/m01.jpg";
// import c02Img from "../../assets/img/d01.jpg";
// import c03Img from "../../assets/img/c04.jpg";
// import c04Img from "../../assets/img/c02.jpg";
import axios from "axios";

const Community = () => {
    const [community, setCommunity] = useState([]);

    useEffect(() => {
        axios.post("/api/community/list")
            .then((response) => {
                if (response.data.success) {
                    setCommunity([...response.data.community]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="container">
            <div className="section_title">
                <h2>지금 핫플 🔥</h2>
            </div>

            <CommuSwiper />

            <div className="section_title">
                <h2>최신 글 모아보기 💬</h2>
                <Link to='/communityWrite'>글쓰기</Link>
            </div>
            <ul className="post_grid">
                {community.map((post, key) => {
                    console.log(post);

                    return (
                        <li className={post.image.length > 0 && post.image[0] !== '' ? "isImg" : ""} key={key}>
                            <Link to={`/detail/${post.commuNum}`}>
                                {post.image.length > 0 && post.image[0] !== '' ? <img src={post.image[0]} alt="new_post" /> : null}
                                <div className="post_title">{post.title}</div>
                                <p>{post.content}</p>
                                <div className="rank_reaction">
                                    <span>👁 234</span>
                                    <span>🗨 18</span>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Community;