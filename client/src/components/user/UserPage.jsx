import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import firebase from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    // const [proImage, setProImage] = useState("");
    // const [bgImage, setBgImage] = useState("");
    // const [youName, setYouName] = useState("");

    const [userInfo, setUserInfo] = useState("");

    // 탭 메뉴
    const [activeTab, setActiveTab] = useState("mypageTab1");
    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 이용 가능합니다.");
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        let body = {
            uid: user.uid,
        };
        axios
            .post("/api/user/userpage", body)
            .then((response) => {
                if (response.data.success) {
                    console.log(response);
                    setUserInfo(response.data.userInfo);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user]);

    // useEffect(() => {
    //   if (user.isLoading && !user.accessToken) {
    //     navigate("/login");
    //   } else {
    //     console.log("유저!!! : ", user);
    //     setProImage(user.photoURL);
    //     setBgImage(user.bgURL);
    //     setYouName(user.displayName);
    //   }
    // }, [user]);

    return (
        <>
            <div className="page_title">
                <h2>마이페이지</h2>
            </div>

            <div className="container">
                <div className="mypage_tab">
                    <button
                        className={`mypage_tab_btn ${activeTab === "mypageTab1" ? "active" : ""
                            }`}
                        onClick={() => openTab("mypageTab1")}
                    >
                        내 프로필 관리
                    </button>
                    <button
                        className={`mypage_tab_btn ${activeTab === "mypageTab2" ? "active" : ""
                            }`}
                        onClick={() => openTab("mypageTab2")}
                    >
                        나의 활동
                    </button>
                    <button
                        className={`mypage_tab_btn ${activeTab === "mypageTab3" ? "active" : ""
                            }`}
                        onClick={() => openTab("mypageTab3")}
                    >
                        관심 목록
                    </button>
                    <button
                        className={`mypage_tab_btn ${activeTab === "mypageTab4" ? "active" : ""
                            }`}
                        onClick={() => openTab("mypageTab4")}
                    >
                        내 정보
                    </button>
                </div>

                <div
                    id="mypageTab1"
                    className={`mypage_content ${activeTab === "mypageTab1" ? "show" : ""
                        }`}
                >
                    {activeTab === "mypageTab1" && (
                        <>
                            <div className="profile_wrap">
                                <div className="profile_view">
                                    <div className="photo_area">
                                        <label className="photo_bg" htmlFor="user_pro">
                                            <input id="user_bg" type="file" />
                                            <img src={userInfo.bgURL} alt="photo_bg" />
                                        </label>
                                        <label className="photo_profile" htmlFor="user_bg">
                                            <input id="user_pro" type="file" />
                                            <img src={userInfo.photoURL} alt="photo_profile" />
                                        </label>
                                    </div>
                                    <div className="photo_btn">
                                        <button>🖍 프로필 사진변경</button>
                                        <button>🖍 배경 사진변경</button>
                                    </div>
                                </div>
                                <div className="profile_info">
                                    <h2>프로필 변경</h2>
                                    <div className="info_line info_name">
                                        <label>닉네임 변경하기</label>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="새 닉네임"
                                                defaultValue={userInfo.displayName}
                                            />
                                            <button>중복 검사</button>
                                        </div>
                                    </div>

                                    <div className="info_line info_text">
                                        <label>소개 글 작성</label>
                                        <input
                                            type="text"
                                            placeholder="나의 스타일 소개를 작성해주세요!"
                                            defaultValue={userInfo.infoText}
                                        />
                                    </div>

                                    <div className="info_line info_style">
                                        <label>스타일</label>
                                        <div className="style_check">
                                            <ul>
                                                <li className="active">데일리</li>
                                                <li className="active">큐티</li>
                                            </ul>
                                        </div>
                                        <ul className="style_list">
                                            <li className="active">데일리</li>
                                            <li>청순</li>
                                            <li className="active">큐티</li>
                                            <li>섹시</li>
                                            <li>톰보이</li>
                                            <li>스트릿</li>
                                            <li>페미닌</li>
                                            <li>미니멀</li>
                                            <li>맥시멈</li>
                                            <li>모던</li>
                                            <li>레이어드</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="profile_save">
                                <button>저장하기</button>
                            </div>
                        </>
                    )}
                </div>

                <div
                    id="mypageTab2"
                    className={`mypage_content ${activeTab === "mypageTab2" ? "show" : ""
                        }`}
                >
                    {activeTab === "mypageTab2" && (
                        <>
                            {/* 나의 활동 컨텐츠 */}
                            <p>2번 컨텐츠</p>
                        </>
                    )}
                </div>

                <div
                    id="mypageTab3"
                    className={`mypage_content ${activeTab === "mypageTab3" ? "show" : ""
                        }`}
                >
                    {activeTab === "mypageTab3" && (
                        <>
                            {/* 관심 목록 컨텐츠 */}
                            <p>3번 컨텐츠</p>
                        </>
                    )}
                </div>

                <div
                    id="mypageTab4"
                    className={`mypage_content ${activeTab === "mypageTab4" ? "show" : ""
                        }`}
                >
                    {activeTab === "mypageTab4" && (
                        <>
                            {/* 내 정보 컨텐츠 */}
                            <p>4번 컨텐츠</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserPage;