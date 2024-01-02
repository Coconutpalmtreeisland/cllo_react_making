import React, { useEffect } from "react";
import PostSwiper from "../../util/PostSwiper";

const CommuDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="post">
                <div className="page_info">
                    <div className="left">
                        <h2 className="title">
                            요즘 날씨에 딱입니다!! 머플러 코디 보고가세요 <span>(8)</span>
                        </h2>
                        <div className="auth">
                            {/* <div className="auth_profile"></div> */}
                            <div className="auth_name">글쓴이</div>
                            <div className="post_view">조회 58</div>
                            <div className="post_date">2024.04.11</div>
                        </div>
                    </div>
                    <div className="right">···</div>
                </div>
                <PostSwiper />
                <div className="page_contents">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
                        quisquam voluptates alias! Quaerat, tenetur quibusdam quas, minima
                        dignissimos ipsa repellendus temporibus nobis explicabo iste
                        similique, beatae dolor blanditiis! Neque, vero. Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Ratione quisquam voluptates
                        alias! Quaerat, tenetur quibusdam quas, minima dignissimos ipsa
                        repellendus temporibus nobis explicabo iste similique, beatae dolor
                        blanditiis! Neque, vero. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Ratione quisquam voluptates alias! Quaerat,
                        tenetur quibusdam quas, minima dignissimos ipsa repellendus
                        temporibus nobis explicabo iste similique, beatae dolor blanditiis!
                        Neque, vero.
                    </p>
                    <div className="reaction_btn">
                        <button>
                            💗 <span>20</span>
                        </button>
                        <button>
                            💬 <span>5</span>
                        </button>
                    </div>
                </div>

                <div className="reple_box">
                    <label htmlFor="reple_write" className="blind">
                        댓글 쓰기
                    </label>
                    <input
                        type="text"
                        name="reple_write"
                        id="reple_write"
                        placeholder="익명으로 자유롭게 의견을 남겨보세요 :)"
                    />
                    <button>등록</button>
                </div>
                <div className="reple_list">
                    <div className="reple">
                        <div className="reple_info">
                            <div className="reple_auth">익명1</div>
                            <div className="reple_date">2024.04.11</div>
                        </div>
                        <div className="reple_contents">왕~~ 너무 귀여워요ㅎㅎ</div>
                        <button className="reple_edit">···</button>
                    </div>
                    <div className="reple">
                        <div className="reple_info">
                            <div className="reple_auth">익명2</div>
                            <div className="reple_date">2024.04.11</div>
                        </div>
                        <div className="reple_contents">
                            대박 저 목도리 브랜드 어디인가요? 패턴 굿굿^^!
                        </div>
                        <button className="reple_edit">···</button>
                    </div>
                    <div className="reple">
                        <div className="reple_info">
                            <div className="reple_auth">익명3</div>
                            <div className="reple_date">2024.04.11</div>
                        </div>
                        <div className="reple_contents">
                            역시 겨울은 머플러 하나로 멋내기 좋네요
                        </div>
                        <button className="reple_edit">···</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommuDetail;