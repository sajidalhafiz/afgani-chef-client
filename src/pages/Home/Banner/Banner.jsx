import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import afganFlag from '../../../assets/afgan-flag.png'
import img1 from '../../../assets/banner-img1.png'
import img2 from '../../../assets/banner-img2.png'
import img3 from '../../../assets/banner-img3.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row mt-10 items-center'>
            <div className='relative me-9'>
                <h2 className='text-8xl font-extrabold text-right bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-30% via-orange-500 via-70% to-red-500 to-90%'>پلټنګ ګورمې یو د عالم په یو ډګر</h2>
                <h2 className='text-4xl font-extrabold text-gray-400 mt-10'>Connecting Chefs with Food Lovers Worldwide Where Every Bite is an Experience.</h2>
                <img className='w-20 absolute top-32 rotate-12 ml-2' src={afganFlag} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
                <Swiper
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide><img className='h-full w-full' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;