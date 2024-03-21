import { Suspense } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout({ children }) {
    return (
        // <div className="px-0">
        <>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        // {/* <div className="relative">{children}</div> */}
        // </div>
    );
}

export default MainLayout;
