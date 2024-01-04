import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/css/style.css";

import c01Img from "../assets/img/c01.jpg";
import c02Img from "../assets/img/c02.jpg";
import c03Img from "../assets/img/c03.jpg";
import { Link } from "react-router-dom";

const CommuSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                className="commuSwiper"
            >
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num chart_in_color">1</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c01Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num chart_in_color">2</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c02Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num chart_in_color">3</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c01Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">4</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c03Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">5</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c01Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">6</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c03Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">7</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c02Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">8</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c01Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">9</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c03Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/post">
                        <div className="rank_num">10</div>
                        <div className="rank_info">
                            <div className="rank_text">
                                <h3>헤메코 레전드</h3>
                            </div>
                            <div className="rank_reaction">
                                <span>👁 234</span>
                                <span>🗨 18</span>
                            </div>
                        </div>
                        <div className="rank_img">
                            <img src={c02Img} alt="popular_board" />
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CommuSwiper;