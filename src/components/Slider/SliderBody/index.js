import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { useRef, useState } from 'react';

function SliderBody({ children, data }) {
    const sliderRef = useRef();
    const testRef = useRef();
    const [x, setX] = useState(0);
    const [isDelay, setDelay] = useState(false);

    const scroll = (direction = '') => {
        setDelay(true);

        if (data * 216 < sliderRef.current.clientWidth) {
            return;
        }
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
                    className={`whitespace-nowrap pb-[24px] pl-[16px] pt-[16px] transition-transform`}
                >
                    {children}
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
