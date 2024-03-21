import Modal from '../Modal';
import { NavLink } from 'react-router-dom';
import { CloseBtn } from '../../assets/icons';
import mobileNavConfig from './mobileNavConfig';
import { handleCloseMobileMenu } from '../../Utils/mobileNavFunction';

import NavItem from './NavItem';
import { navConfig } from './navConfig';

function MobileNavigation() {
    return (
        <Modal
            id="mobileNav"
            modal_ID="mobile_Navbar_Modal"
            className="left-0 top-0 w-full -translate-x-full md:w-[330px] "
            translate="-translate-x-full"
        >
            <div className="relative flex flex-col items-start px-8 py-4">
                <button
                    className="absolute right-0 p-4 transition-opacity hover:opacity-50"
                    onClick={() => handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')}
                >
                    <CloseBtn />
                </button>
                <div className="px-8 py-12">
                    <NavLink
                        className="border-0 bg-white text-xl leading-loose transition-opacity hover:opacity-50"
                        to={'/'}
                        onClick={() => handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')}
                    >
                        lOG IN
                    </NavLink>
                </div>
                {navConfig.map((ele, idx) => (
                    <NavItem
                        config={ele}
                        key={idx}
                        handleCloseMobileMenu={() =>
                            handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')
                        }
                    />
                ))}

                {/* {mobileNavConfig.map((ele, idx) => (
                    <NavLink
                        className="border bg-primary-Color px-8 py-4 text-xl uppercase leading-loose transition-opacity hover:opacity-50"
                        to={ele.path}
                        key={idx}
                        onClick={() => handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')}
                    >
                        {ele.navTitle}
                    </NavLink>
                ))} */}
            </div>
        </Modal>
    );
}

export default MobileNavigation;
