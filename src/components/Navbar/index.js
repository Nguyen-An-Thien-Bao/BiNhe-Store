import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { HiUser, HiOutlineLogin } from 'react-icons/hi';

import SearchBox from '../SearchBox';
import MobileNavbar from '../MobileNavbarModal';

import Cart from '../Cart';
import Button from '../Button';
import AuthStateContext from '../../Context/AuthStateContext';

function Navbar() {
    const authContextValue = useContext(AuthStateContext);
    const [user] = authContextValue;

    return (
        <section className="sticky left-0 right-0 top-0 z-50 grid h-24 w-full grid-cols-3 items-center bg-white px-8 shadow-[0_0_3px_rgba(0,0,0,0.08)_inset] md:h-36 lg:h-40 lg:px-24">
            <div className="flex items-center">
                <MobileNavbar />
                <Button className="ml-8 hidden lg:inline-block" size="sm">
                    join our teams!
                </Button>
            </div>
            <NavLink to={'/'} className="mx-auto -translate-y-1/4">
                <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
                    <svg viewBox="0 0 100 143.41987535931196">
                        <g
                            transform="matrix(2.879678637425496,0,0,2.879678637425496,-10.518888993125303,-5.625451625015186)"
                            fill="#111111"
                        >
                            <path d="M18.809 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M12.852 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M14.18 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M30.48829375 9.140999999999998 l5.1172 -7.1875 l2.7734 1.9727 l-4.4336 5.2148 l-3.457 0 z M29.33589375 40 l0 -28.223 l5.8594 0 l0 28.223 l-5.8594 0 z"></path>
                        </g>
                        <g transform="matrix(0.9510087762179603,0,0,0.9510087762179603,5.2631720813855765,124.39950982837372)">
                            <path d="M11.465 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M49.0579609375 5.888999999999999 l2.9297 0 l0 14.111 l-2.9297 0 l0 -5.8008 l-5.9668 0 l0 5.8008 l-2.9297 0 l0 -14.111 l2.9297 0 l0 5.7617 l5.9668 0 l0 -5.7617 z M85.9475 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z"></path>
                        </g>
                    </svg>
                </div>
                {/* <img src={regularLogo} alt="" srcSet={`${regularLogo} 1x, ${retinaLogo} 2x`} /> */}
            </NavLink>
            <div className="flex items-center justify-end">
                <SearchBox />
                <Cart />
                {user != null ? (
                    <div className="flex h-12 w-12 items-center justify-center">
                        <HiUser className="text-3xl" />
                    </div>
                ) : (
                    <NavLink to={'/account/login'} className="text-xl">
                        <span className="hidden lg:inline-block">LOG IN</span>
                        <HiOutlineLogin className="text-4xl lg:hidden" />
                    </NavLink>
                )}
            </div>
        </section>
    );
}

export default Navbar;
