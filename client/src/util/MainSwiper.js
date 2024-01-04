import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../assets/css/section/slide.css'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import slide01 from '../assets/img/slide01.jpg'
import slide02 from '../assets/img/slide02.jpg'
import slide03 from '../assets/img/slide03.jpg'

export function MainSwiper() {
    return (
        <Swiper
            className="mainSwiper"
            effect="fade"
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
        >
            <SwiperSlide>
                <img src={slide01} alt="slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide02} alt="slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide03} alt="slide 3" />
            </SwiperSlide>
            <div className="swiper-pagination"></div>
        </Swiper>
    );
}
