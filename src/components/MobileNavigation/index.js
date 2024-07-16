import Modal from '../Modal';
import { NavLink, useNavigate } from 'react-router-dom';
import { CloseBtn } from '../../assets/icons';
import mobileNavConfig from './mobileNavConfig';
import { handleCloseMobileMenu } from '../../Utils/mobileNavFunction';

import NavItem from './NavItem';
import { navConfig } from './navConfig';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../configs/firestore';
import { signOut } from 'firebase/auth';
import AuthStateContext from '../../Context/AuthStateContext';

function MobileNavigation() {
    const navigate = useNavigate();
    const authContextValue = useContext(AuthStateContext);
    const [user] = authContextValue;

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                    {user == null ? (
                        <NavLink
                            className="border-0 bg-white text-xl leading-loose transition-opacity hover:opacity-50"
                            to={'/account/login'}
                            onClick={() =>
                                handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')
                            }
                        >
                            lOG IN
                        </NavLink>
                    ) : (
                        <button
                            onClick={() => {
                                handleCloseMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full');
                                handleLogOut();
                            }}
                        >
                            LOG OUT
                        </button>
                    )}
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
