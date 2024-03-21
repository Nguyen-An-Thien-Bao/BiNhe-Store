import { useRef } from 'react';
import { slideShow1, slideShow2, slideShow3, slideShow4 } from '../../assets/slider';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import SliderItem from './SliderItem';

function Slider() {
    const carousel = useRef();
    const slide = useRef();

    const handle_Sliding = (ele, direction = '') => {
        let imageWidth = ele.clientWidth;
        let firstSlide = 0;
        let lastSlide = imageWidth * 2;
        setTimeout(() => {
            if (direction === 'left') {
                slide.current.scrollLeft === firstSlide
                    ? (slide.current.scrollLeft += imageWidth * 3)
                    : (slide.current.scrollLeft += -imageWidth);
            } else if (direction === 'right') {
                if (slide.current.scrollLeft > lastSlide) {
                    slide.current.scrollLeft -= imageWidth * 3;
                } else {
                    slide.current.scrollLeft += imageWidth;
                }
            }
            // slide.current.scrollLeft += direction === 'left' ? -imageWidth : imageWidth;
        }, 100);
    };

    return (
        <div className="relative overflow-visible lg:h-screen">
            <div ref={slide} className="overflow-x-hidden scroll-smooth duration-1000 ease-in-out lg:h-full">
                <div ref={carousel} className="flex h-full w-[100%] snap-mandatory bg-slate-100">
                    <SliderItem src={slideShow1} />
                    <SliderItem src={slideShow2} />
                    <SliderItem src={slideShow3} />
                    <SliderItem src={slideShow4} />
                </div>
            </div>
            <div className="absolute inset-0 z-10">
                <button
                    className="absolute left-0 top-2/4 h-full w-24 -translate-y-2/4 bg-gradient-to-l from-transparent to-black opacity-20"
                    onClick={() => handle_Sliding(carousel.current, 'left')}
                >
                    <HiChevronLeft className="w-full text-4xl text-white lg:text-6xl" />
                </button>
                <button
                    className="absolute right-0 top-2/4 h-full w-24 -translate-y-2/4 bg-gradient-to-r from-transparent to-black opacity-20"
                    onClick={() => handle_Sliding(carousel.current, 'right')}
                >
                    <HiChevronRight className="w-full text-4xl text-white lg:text-6xl" />
                </button>
            </div>
        </div>
    );
}

export default Slider;
