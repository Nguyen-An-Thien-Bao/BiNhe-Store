import Modal from '../Modal';
import { CartIcon } from '../../assets/icons';
import { handleOpenMobileMenu as handleOpenCartModal, handleCloseMobileMenu } from '../../Utils/mobileNavFunction';
import CartItem from './CartItem';
import { CloseBtn } from '../../assets/icons';
import { VND } from '../../Utils/currencyFormat';

function Cart() {
    const data = {
        name: 'White Flower Buttons Puff Sleeves Top',
        price: '420000',
        color: 'white',
        material: 'cotton',
        size: 's',
    };

    return (
        <div className="hover:cursor relative mr-7 lg:mr-14">
            <div className="flex" onClick={() => handleOpenCartModal('cart_modal', 'cart', 'translate-x-full')}>
                {/* <span className="mr-3 cursor-default text-xl font-bold">$0.00</span> */}
                <CartIcon size={'17'} className="cursor-pointer" />
                <span className="absolute right-[-13px] top-[-10px] h-6 w-6 rounded-full bg-black text-center text-base font-bold text-white">
                    0
                </span>
            </div>
            <Modal
                id="cart"
                modal_ID="cart_modal"
                translate="translate-x-full"
                className="right-0 top-0 w-[303px] translate-x-full overflow-y-scroll px-12 pb-40 pt-16 md:w-[483px]"
            >
                <div className="relative">
                    <h2 className="px-8 py-8 text-[14px] uppercase">Your Shopping Bag</h2>
                    <button
                        className="absolute right-0 top-3 p-4 transition-opacity hover:opacity-50"
                        onClick={() => handleCloseMobileMenu('cart_modal', 'cart', 'translate-x-full')}
                    >
                        <CloseBtn />
                    </button>
                </div>

                <CartItem data={data} />

                <div className="flex items-center justify-between px-8 py-8 text-2xl">
                    <h3>Total</h3>
                    <span className="">{VND.format(1000000)}</span>
                </div>
            </Modal>
        </div>
    );
}

export default Cart;
