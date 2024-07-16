import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// import SliderItem from '../SliderItem';
import { useRef, useState } from 'react';

function SliderBody({ children }) {
    const sliderRef = useRef();
    const testRef = useRef();
    const [x, setX] = useState(0);
    const [isDelay, setDelay] = useState(false);

    const scroll = (direction = '') => {
        // const slider = sliderRef.current;
        // console.log(x, slider.scrollWidth);
        setDelay(true);
        if (direction === 'right') {
            setX((prev) => (prev -= 216));
        } else {
            setX((prev) => (prev += 216));
        }
    };

    const handleScroll = async (direction = '') => {
        scroll(direction);
        setDelay(false);
    };

    return (
        <div className="relative overflow-hidden">
            <div ref={testRef} className="scroll-smooth">
                <div
                    style={{ transform: `translate3d(${x}px, 0px, 0px)` }}
                    ref={sliderRef}
                    className={`pb-[24px] pl-[16px] pt-[16px] transition-transform`}
                >
                    <div className="items-start whitespace-nowrap">{children}</div>
                </div>

                <button
                    onClick={() => handleScroll('left')}
                    disabled={isDelay}
                    className="absolute left-0 top-2/4 aspect-square h-[45px] -translate-y-2/4 rounded-full border bg-white text-5xl shadow-arrowController"
                >
                    <HiChevronLeft className="mx-auto" />
                </button>
                <button
                    onClick={() => handleScroll('right')}
                    disabled={isDelay}
                    className="absolute right-0 top-2/4 aspect-square h-[45px] -translate-y-2/4 rounded-full border bg-white text-5xl shadow-arrowController"
                >
                    <HiChevronRight className="mx-auto" />
                </button>
            </div>
        </div>
    );
}

export default SliderBody;
