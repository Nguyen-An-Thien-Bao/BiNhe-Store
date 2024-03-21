import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

function CollapseButton({ title, children, config = [] }) {
    const [open, setOpen] = useState(() => {
        return window.innerWidth >= 1024 ? true : false;
    });

    const handleOpenCollapse = () => {
        if (window.innerWidth >= 1024) {
            return;
        }
        setOpen((prev) => !prev);
    };

    return (
        <div onClick={() => handleOpenCollapse()} className="cursor-pointer select-none lg:px-6">
            <p className="border-b-[1px] border-black py-4 text-2xl uppercase lg:pb-6 lg:text-3xl">
                {title}
                {open || <HiChevronDown className="float-right inline" />}
            </p>
            {open && (
                <div className="my-4 text-2xl capitalize leading-[28px] lg:my-6">
                    {config.map((ele) => (
                        <NavLink key={ele.title} to={ele.url} className="block">
                            {ele.title}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CollapseButton;
