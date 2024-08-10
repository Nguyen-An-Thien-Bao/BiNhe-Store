import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carouselV2.css';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { slideShow1, slideShow2, slideShow3, slideShow4 } from '../../assets/slider';
import { useRef } from 'react';

import React from 'react';
import Slider from 'react-slick';

function CarouselV2() {
    const sliderRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        fade: true,
    };

    const handleSlide = (direction) => {
        const slider = sliderRef.current;
        direction === 'right' ? slider.slickNext() : slider.slickPrev();
    };

    return (
        <div className="relative overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                <div className="h-full w-full flex-shrink-0 snap-center overflow-hidden outline-none">
                    <img src={slideShow1} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="h-full w-full flex-shrink-0 snap-center overflow-hidden outline-none">
                    <img src={slideShow2} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="h-full w-full flex-shrink-0 snap-center overflow-hidden outline-none">
                    <img src={slideShow3} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="h-full w-full flex-shrink-0 snap-center overflow-hidden outline-none">
                    <img src={slideShow4} alt="" className="h-full w-full object-cover" />
                </div>
            </Slider>
            <button className="absolute left-0 top-2/4 w-24 -translate-y-2/4">
                <HiChevronLeft
                    onClick={() => handleSlide('left')}
                    className="w-full text-4xl text-black transition-colors hover:text-white lg:text-6xl"
                />
            </button>
            <button className="absolute right-0 top-2/4 w-24 -translate-y-2/4">
                <HiChevronRight
                    onClick={() => handleSlide('right')}
                    className="w-full text-4xl text-black transition-colors hover:text-white lg:text-6xl"
                />
            </button>
        </div>
    );
}

export default CarouselV2;
