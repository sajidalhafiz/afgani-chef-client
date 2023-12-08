import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img3 from '../../../assets/chef-3.png'
import img4 from '../../../assets/chef-4.png'
import img5 from '../../../assets/chef-5.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div>
                <h2 className='text-7xl font-extrabold'>Lorem ipsum dolor sit amet consectetur.</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dignissimos sapiente eius ea, enim quidem iure consequatur doloremque ut sit, esse odio ipsum, possimus nostrum!</p>
            </div>
            <div className='w-full md:w-1/2'>
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide><img className='h-full w-full' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={img5} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;