import React from 'react'
import "./Slideone.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import  "Swiper/css";
import { Autoplay,Navigation  } from 'swiper';
import { MdDoubleArrow } from "react-icons/md";
import carrot from "../Images/carrot.jpg";
import choco from  "../Images/choco.jpg";




const Slideone = () => {
    return (
        <div>
           <Swiper>
            slidePerView={4}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}

            navigation={true}
            modules={{Autoplay, Navigation}}
            className='mySwiper'
           </Swiper>

           <SwiperSlide>
            <div className='hoverIncrease'>
                <img src={carrot} alt="" />
                <div className='content'>
                    <h1>product one</h1>
                    <h2>R12</h2>
                    <div className='price-underline'></div>
                    <div className='select-btn'>
                        <p>SELECT</p>
                        <MdDoubleArrow  className='ml-1'/>
                    </div>

                </div>
                <Slideone/>

            </div>
           </SwiperSlide>
        </div>
    );
};

export default Slideone;