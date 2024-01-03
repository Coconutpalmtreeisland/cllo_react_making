import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import { MdCancel } from "react-icons/md";
import example from '../assets/img/c01.jpg'



const CommuWrite = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cancelSize = windowSize <= 450 ? "20px" : "30px";

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={15}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={example} alt="사진" />
                    <button><MdCancel size={cancelSize} /></button>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CommuWrite