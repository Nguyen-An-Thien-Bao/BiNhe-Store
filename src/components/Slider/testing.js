// import React, { Children, useMemo } from 'react';
// import styled from 'styled-components';

// const Carousel = ({
//     children,
//     visibleItemsCount = 1, // how many items to show
//     isInfinite, // is it an infinite loop?
//     withIndicator, // show dots?
// }) => {
//     const indicatorContainerRef = React.useRef(null);
//     const [timeoutInProgress, setTimeoutInProgress] = React.useState(false); // a boolean for if timeout is im progress, used to stop user from spam clicking next or back in certain conditions

//     /**
//      * Total item
//      */
//     const originalItemsLength = React.useMemo(() => Children.count(children), [children]);

//     /**
//      * Is the carousel repeating it's item
//      */
//     const isRepeating = React.useMemo(
//         () => isInfinite && Children.count(children) > visibleItemsCount,
//         [children, isInfinite, visibleItemsCount],
//     );

//     /**
//      * Current Index Item of the Carousel
//      */
//     const [currentIndex, setCurrentIndex] = React.useState(isRepeating ? visibleItemsCount : 0);

//     /**
//      * Is the carousel's transition enabled
//      */
//     const [isTransitionEnabled, setTransitionEnabled] = React.useState(true);

//     /**
//      * First touch position to be used in calculation for the swipe speed
//      */
//     const [touchPosition, setTouchPosition] = React.useState(null);

//     /**
//      * Handle if the carousel is repeating
//      * and the currentIndex have been set to the last or first item
//      */
//     React.useEffect(() => {
//         if (isRepeating) {
//             if (currentIndex === visibleItemsCount || currentIndex === originalItemsLength) {
//                 setTransitionEnabled(true);
//             }
//         }
//     }, [currentIndex, isRepeating, visibleItemsCount, originalItemsLength]);

//     React.useEffect(() => {
//         if (withIndicator) {
//             const active = indicatorContainerRef.current?.querySelector('.dots-active');
//             if (active) {
//                 let index = active.getAttribute('data-index');
//                 if (index !== null && indicatorContainerRef.current?.scrollTo) {
//                     indicatorContainerRef.current?.scrollTo({
//                         left: ((Number(index) - 2) / 5) * 50,
//                         behavior: 'smooth',
//                     });
//                 }
//             }
//         }
//     }, [withIndicator, currentIndex]);

//     /**
//      * Move forward to the next item
//      */
//     const nextItem = () => {
//         const isOnEdgeForward = currentIndex > originalItemsLength;
//         if (isOnEdgeForward) {
//             setTimeoutInProgress(true);
//         }

//         if (isRepeating || currentIndex < originalItemsLength - visibleItemsCount) {
//             setCurrentIndex((prevState) => prevState + 1);
//         }
//     };

//     /**
//      * Move backward to the previous item
//      */
//     const previousItem = () => {
//         const isOnEdgeBack = isRepeating ? currentIndex <= visibleItemsCount : currentIndex === 0;

//         if (isOnEdgeBack) {
//             setTimeoutInProgress(true);
//         }

//         if (isRepeating || currentIndex > 0) {
//             setCurrentIndex((prevState) => prevState - 1);
//         }
//     };

//     /**
//      * Handle when the user start the swipe gesture
//      * @param e TouchEvent
//      */
//     const handleTouchStart = (e) => {
//         // Save the first position of the touch
//         const touchDown = e.touches[0].clientX;
//         setTouchPosition(touchDown);
//     };

//     /**
//      * Handle when the user move the finger in swipe gesture
//      * @param e TouchEvent
//      */
//     const handleTouchMove = (e) => {
//         // Get initial location
//         const touchDown = touchPosition;

//         // Proceed only if the initial position is not null
//         if (touchDown === null) {
//             return;
//         }

//         // Get current position
//         const currentTouch = e.touches[0].clientX;

//         // Get the difference between previous and current position
//         const diff = touchDown - currentTouch;

//         // Go to next item
//         if (diff > 5) {
//             nextItem();
//         }

//         // Go to previous item
//         if (diff < -5) {
//             previousItem();
//         }

//         // Reset initial touch position
//         setTouchPosition(null);
//     };

//     /**
//      * Handle when carousel transition's ended
//      */
//     const handleTransitionEnd = () => {
//         if (isRepeating) {
//             if (currentIndex === 0) {
//                 setTransitionEnabled(false);
//                 setCurrentIndex(originalItemsLength);
//             } else if (currentIndex === originalItemsLength + visibleItemsCount) {
//                 setTransitionEnabled(false);
//                 setCurrentIndex(visibleItemsCount);
//             }
//         }

//         setTimeoutInProgress(false);
//     };

//     /**
//      * Render previous items before the first item
//      */
//     const extraPreviousItems = React.useMemo(() => {
//         let output = [];
//         for (let index = 0; index < visibleItemsCount; index++) {
//             output.push(Children.toArray(children)[originalItemsLength - 1 - index]);
//         }
//         output.reverse();
//         return output;
//     }, [children, originalItemsLength, visibleItemsCount]);

//     /**
//      * Render next items after the last item
//      */
//     const extraNextItems = React.useMemo(() => {
//         let output = [];
//         for (let index = 0; index < visibleItemsCount; index++) {
//             output.push(Children.toArray(children)[index]);
//         }
//         return output;
//     }, [children, visibleItemsCount]);

//     // render n (n being the count of original items / visibleItemsCount) dots
//     const renderDots = React.useMemo(() => {
//         let output = [];

//         const localShow = isRepeating ? visibleItemsCount : 0;
//         const localLength = isRepeating ? originalItemsLength : Math.ceil(originalItemsLength / visibleItemsCount);
//         const calculatedActiveIndex =
//             currentIndex - localShow < 0 ? originalItemsLength + (currentIndex - localShow) : currentIndex - localShow;

//         for (let index = 0; index < localLength; index++) {
//             let className = '';
//             if (calculatedActiveIndex === index) {
//                 className = 'dots-active';
//             } else {
//                 if (calculatedActiveIndex === 0) {
//                     if (calculatedActiveIndex + index <= 2) {
//                         className = 'dots-close';
//                     } else {
//                         className = 'dots-far';
//                     }
//                 } else if (calculatedActiveIndex === localLength - 1) {
//                     if (Math.abs(calculatedActiveIndex - index) <= 2) {
//                         className = 'dots-close';
//                     } else {
//                         className = 'dots-far';
//                     }
//                 } else {
//                     if (Math.abs(calculatedActiveIndex - index) === 1) {
//                         className = 'dots-close';
//                     } else {
//                         className = 'dots-far';
//                     }
//                 }
//             }
//             output.push(<div key={index} data-index={index} className={className} />);
//         }

//         return output;
//     }, [currentIndex, isRepeating, originalItemsLength, visibleItemsCount]);

//     const isNextButtonVisible = useMemo(() => {
//         return isRepeating || currentIndex < originalItemsLength - visibleItemsCount;
//     }, [isRepeating, currentIndex, originalItemsLength, visibleItemsCount]);

//     const isPrevButtonVisible = useMemo(() => isRepeating || currentIndex > 0, [isRepeating, currentIndex]);

//     return (
//         <StyledCarousel visibleItemsCount={visibleItemsCount}>
//             <div className={`carousel-wrapper`}>
//                 {isPrevButtonVisible ? (
//                     <button
//                         disabled={timeoutInProgress}
//                         style={{
//                             cursor: timeoutInProgress ? 'not-allowed' : 'pointer',
//                             pointerEvents: timeoutInProgress ? 'none' : 'inherit',
//                         }}
//                         onClick={previousItem}
//                         className="left-arrow-button"
//                     >
//                         <span className="left-arrow" />
//                     </button>
//                 ) : null}
//                 <div
//                     className={`carousel-content-wrapper`}
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                 >
//                     <div
//                         className={`carousel-content`}
//                         style={{
//                             transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
//                             transition: !isTransitionEnabled ? 'none' : undefined,
//                         }}
//                         onTransitionEnd={() => handleTransitionEnd()}
//                     >
//                         {isRepeating && extraPreviousItems}
//                         {children}
//                         {isRepeating && extraNextItems}
//                     </div>
//                 </div>
//                 {isNextButtonVisible ? (
//                     <button
//                         disabled={timeoutInProgress}
//                         style={{
//                             cursor: timeoutInProgress ? 'not-allowed' : 'pointer',
//                             pointerEvents: timeoutInProgress ? 'none' : 'inherit',
//                         }}
//                         onClick={nextItem}
//                         className="right-arrow-button"
//                     >
//                         <span className="right-arrow" />
//                     </button>
//                 ) : null}
//             </div>
//             {withIndicator && (
//                 <div ref={indicatorContainerRef} className={`indicator-container `}>
//                     {renderDots}
//                 </div>
//             )}
//         </StyledCarousel>
//     );
// };
