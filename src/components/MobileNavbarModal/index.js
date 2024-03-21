import { MenuHamburger } from '../../assets/icons';
import { handleOpenMobileMenu } from '../../Utils/mobileNavFunction';
import MobileNavigation from '../MobileNavigation/index.js';
import Button from '../Button';

function MobileNavbar() {
    return (
        <div className="">
            <div
                className="cursor-pointer"
                onClick={() => handleOpenMobileMenu('mobile_Navbar_Modal', 'mobileNav', '-translate-x-full')}
            >
                <Button className="hidden border md:inline-block" size="sm" border>
                    shop
                </Button>
                <MenuHamburger className="md:hidden" />
            </div>
            <MobileNavigation />
        </div>
    );
}
export default MobileNavbar;
