import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import p01Img from "../assets/img/m01.jpg";
import p02Img from "../assets/img/m02.jpg";
import p03Img from "../assets/img/m03.jpg";
import p04Img from "../assets/img/m04.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function PostSwiper() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                height={400}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="detailSwiper"
            >
                <SwiperSlide>
                    <img src={p01Img} alt="postImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p02Img} alt="postImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p03Img} alt="postImg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p04Img} alt="postImg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}