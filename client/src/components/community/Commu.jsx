import React from "react";
import { Link } from "react-router-dom";
import CommuSwiper from "../../util/CommuSwiper";

import c01Img from "../../assets/img/m01.jpg";
import c02Img from "../../assets/img/d01.jpg";
import c03Img from "../../assets/img/c04.jpg";
import c04Img from "../../assets/img/c02.jpg";

const Commu = () => {
    return (
        <div className="container">
            <div className="section_title">
                <h2>지금 핫플 🔥</h2>
            </div>

            <CommuSwiper />

            <div className="section_title">
                <h2>최신 글 모아보기 💬</h2>
            </div>
            <ul className="post_grid">
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li className="isImg">
                    <Link to="/post">
                        <img src={c01Img} alt="new_post" />
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐
                            입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들
                            뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나?
                            다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지
                            않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로
                            춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그
                            정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직
                            그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데
                            아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까
                            하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러
                            두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li className="isImg">
                    <Link to="/post">
                        <img src={c02Img} alt="new_post" />
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li className="isImg">
                    <Link to="/post">
                        <img src={c03Img} alt="new_post" />
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐
                            입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들
                            뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나?
                            다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로 춥지
                            않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그 정도로
                            춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직 그
                            정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데 아직
                            그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까 하는데
                            아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러 두를까
                            하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?오늘 머플러
                            두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고 나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li className="isImg">
                    <Link to="/post">
                        <img src={c04Img} alt="new_post" />
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <div className="post_title">오늘 날씨에 머플러 어때요?</div>
                        <p>
                            오늘 머플러 두를까 하는데 아직 그 정도로 춥지 않나? 다들 뭐 입고
                            나가?
                        </p>
                        <div className="rank_reaction">
                            <span>👁 234</span>
                            <span>🗨 18</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Commu;