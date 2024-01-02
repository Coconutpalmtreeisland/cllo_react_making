import React from "react";

import cloud from "../assets/img/cloud.png";
import w01 from "../assets/img/w01.jpg";
import w02 from "../assets/img/w02.jpg";
import w03 from "../assets/img/w03.jpg";
import w04 from "../assets/img/w04.jpg";
import profile1 from "../assets/img/profile1.png";
import profile2 from "../assets/img/profile2.png";
import i01 from "../assets/img/i01.jpg";
import i02 from "../assets/img/i02.jpg";
import i03 from "../assets/img/i03.jpg";
import i04 from "../assets/img/i04.jpg";
import d01 from "../assets/img/d01.jpg";
import d02 from "../assets/img/d02.jpg";
import d03 from "../assets/img/d03.jpg";
import d04 from "../assets/img/d04.jpg";
import banner from "../assets/img/banner.jpg";
import m01 from "../assets/img/m01.jpg";
import m02 from "../assets/img/m02.jpg";
import m03 from "../assets/img/m03.jpg";
import m04 from "../assets/img/m04.jpg";
import c01 from "../assets/img/c01.jpg";
import c02 from "../assets/img/c02.jpg";
import c03 from "../assets/img/c03.jpg";
import c04 from "../assets/img/c04.jpg";
import { MainSwiper } from "../util/MainSwiper";

const Home = () => {
  return (
    <>
      <div className="slide">
        <MainSwiper />
      </div>

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ 지금 강남구 대치동 날씨엔?</h3>
            <a href="/">More -&gt;</a>
          </div>

          <ul className="style_item">
            <li className="main_card">
              <a href="/">
                <div className="weather">
                  <h5>비 / 구름</h5>
                  <img src={cloud} alt="cloud" />
                  <p>어제보다 5˚ 낮아요</p>
                  <span>최고 11˚ / 최저 2˚</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={w01} alt="weather" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={w02} alt="weather" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={w03} alt="weather" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={w04} alt="weather" />
              </a>
            </li>
          </ul>
          <span>내 위치 설정하기</span>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* 날씨별 코디 */}

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ 끌로 TOP 인플루언서</h3>
            <a href="/">More -&gt;</a>
          </div>
          {/* style title */}

          <ul className="style_item popular_users">
            <li className="main_card">
              <a href="/">
                <div className="text">
                  <p>
                    끌로 TOP
                    <br />
                    인플루언서
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="user_info">
                  <img src={profile1} alt="Influencer" />
                  <button>+ 팔로우</button>
                  <div className="user_text">
                    <div className="user_name">아이유</div>
                    <div className="user_tag">
                      <p>/데일리룩</p>
                      <p>/페미닌룩</p>
                    </div>
                  </div>
                </div>
                <div className="user_img">
                  <img src={i01} alt="popular_users" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="user_info">
                  <img src={profile2} alt="Influencer" />
                  <button>+ 팔로우</button>
                  <div className="user_text">
                    <div className="user_name">김제니</div>
                    <div className="user_tag">
                      <p>/하이틴</p>
                      <p>/글램</p>
                    </div>
                  </div>
                </div>
                <div className="user_img">
                  <img src={i02} alt="popular_users" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="user_info">
                  <img src={profile2} alt="Influencer" />
                  <button>+ 팔로우</button>
                  <div className="user_text">
                    <div className="user_name">팜하니</div>
                    <div className="user_tag">
                      <p>/키치</p>
                      <p>/큐티</p>
                    </div>
                  </div>
                </div>
                <div className="user_img">
                  <img src={i03} alt="popular_users" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="user_info">
                  <img src={profile1} alt="Influencer" />
                  <button>+ 팔로우</button>
                  <div className="user_text">
                    <div className="user_name">동그라미</div>
                    <div className="user_tag">
                      <p>/청순</p>
                      <p>/캠퍼스</p>
                    </div>
                  </div>
                </div>
                <div className="user_img">
                  <img src={i04} alt="popular_users" />
                </div>
              </a>
            </li>
          </ul>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* 인플루언서 */}

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ /OOTD</h3>
            <a href="/">More -&gt;</a>
          </div>
          {/* style title */}

          <ul className="style_item">
            <li className="main_card">
              <a href="/">
                <div className="tag color_pop01">
                  <p>/OOTD</p>
                  <p>/데일리룩</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={d01} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={d02} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={d03} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={d04} alt="tag" />
              </a>
            </li>
          </ul>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* OOTD 코디 */}

      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      {/* banner */}

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ 머플러 코디는 이렇게!</h3>
            <a href="/">More -&gt;</a>
          </div>
          {/* style title */}

          <ul className="style_item">
            <li className="main_card">
              <a href="/">
                <div className="tag color_pop02">
                  <p>/머플러</p>
                  <p>/목도리</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m01} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m02} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m03} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m04} alt="tag" />
              </a>
            </li>
          </ul>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* 머플러 코디 */}

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ 커뮤니티</h3>
            <a href="/">More -&gt;</a>
          </div>
          {/* style title */}

          <ul className="style_item popular_board">
            <li className="main_card">
              <a href="/">
                <div className="text">
                  <p>
                    커뮤니티
                    <br />
                    HOT 게시글
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="board_info">
                  <div className="board_text">
                    <h3>
                      이 자켓
                      살까말까살까말까살까말까살까말까살까말까살까말까살까말까살까말까?
                    </h3>
                  </div>
                  <div className="board_reaction">
                    <span>👁 234</span>
                    <span>🗨 18</span>
                  </div>
                </div>
                <div className="board_img">
                  <img src={c01} alt="popular_board" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="board_info">
                  <div className="board_text">
                    <h3>추워 죽겠다ㄷㄷㄷ</h3>
                  </div>
                  <div className="board_reaction">
                    <span>👁 234</span>
                    <span>🗨 18</span>
                  </div>
                </div>
                <div className="board_img">
                  <img src={c02} alt="popular_board" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="board_info">
                  <div className="board_text">
                    <h3>택배 언박싱 중 ~~!</h3>
                  </div>
                  <div className="board_reaction">
                    <span>👁 234</span>
                    <span>🗨 18</span>
                  </div>
                </div>
                <div className="board_img">
                  <img src={c03} alt="popular_board" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="board_info">
                  <div className="board_text">
                    <h3>헤메코 레전드</h3>
                  </div>
                  <div className="board_reaction">
                    <span>👁 234</span>
                    <span>🗨 18</span>
                  </div>
                </div>
                <div className="board_img">
                  <img src={c04} alt="popular_board" />
                </div>
              </a>
            </li>
          </ul>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* 커뮤니티 */}

      <section>
        <div className="container style_wrap">
          <div className="style_title">
            <h3>⚡ 머플러 코디는 이렇게!</h3>
            <a href="/">More -&gt;</a>
          </div>
          {/* style title */}

          <ul className="style_item">
            <li className="main_card">
              <a href="/">
                <div className="tag color_pop03">
                  <p>/머플러</p>
                  <p>/목도리</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m01} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m02} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m03} alt="tag" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={m04} alt="tag" />
              </a>
            </li>
          </ul>
          {/* style_item */}
        </div>
        {/* style_wrap */}
      </section>
      {/* 머플러 코디 */}
    </>
  );
};

export default Home;
