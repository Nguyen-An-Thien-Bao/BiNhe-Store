import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

function NavItem({ config = {}, handleCloseMobileMenu = () => {} }) {
    const [open, setOpen] = useState(false);
    const handleOpenSubNav = () => {
        setOpen((prev) => !prev);
    };
    return (
        <>
            <div className="relative flex items-center">
                <NavLink
                    to={config.path}
                    className="text-[14px] font-thin uppercase leading-[30px]"
                    onClick={() => handleCloseMobileMenu()}
                >
                    {config.name}
                </NavLink>
                {config.subNav ? (
                    <span
                        className="ml-4 text-2xl"
                        onClick={() => {
                            handleOpenSubNav();
                        }}
                    >
                        <HiChevronDown />
                    </span>
                ) : (
                    ''
                )}
            </div>
            {config.subNav && open ? (
                <div className={`relative left-[7%] flex flex-col`}>
                    {config.subNav.map((ele, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                if (open === true) {
                                    return;
                                } else {
                                    handleOpenSubNav();
                                }
                            }}
                        >
                            <NavItem config={ele} handleCloseMobileMenu={handleCloseMobileMenu} />
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </>
    );
}

export default NavItem;
