import React from 'react'
import { register } from 'swiper/element/bundle';
import slide1 from '../../assets/slide1.webp'
import slide2 from '../../assets/slide2.webp'
import slide3 from '../../assets/slide3.webp'

register();
const Carousel = () => {
    return (
        <div className="w-[98%] mx-auto">
            <swiper-container
                speed="500"
                loop="true"
                css-mode="true"
                navigation
                autoplay={true}
            >
                <swiper-slide><img src={slide1} alt="" /></swiper-slide>
                <swiper-slide><img src={slide2} alt="" /></swiper-slide>
                <swiper-slide><img src={slide3} alt="" /></swiper-slide>


            </swiper-container>
        </div>
    )
}

export default Carousel