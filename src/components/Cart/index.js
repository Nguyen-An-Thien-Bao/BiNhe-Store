import { HiArrowNarrowRight } from 'react-icons/hi';
import { CartIcon } from '../../assets/icons';
import { useSelector } from 'react-redux';

import Modal from '../Modal';
import { handleOpenMobileMenu as handleOpenCartModal, handleCloseMobileMenu } from '../../Utils/mobileNavFunction';
import CartItem from './CartItem';
import formatCurrency from '../../Utils/currencyFormat';
import { useMemo } from 'react';

function Cart() {
    const cartCounter = useSelector((state) => state.cart.itemCounter);
    const cartItemList = useSelector((state) => state.cart.items);
    const caculatedTotalCart = useMemo(() => {
        let sumValue = cartItemList.reduce((total, currentValue) => {
            total += currentValue.price * currentValue.numberOfItem;
            return total;
        }, 0);
        return sumValue;
    }, [cartItemList]);

    return (
        <div className="hover:cursor relative mr-7 lg:mr-14">
            <div className="flex" onClick={() => handleOpenCartModal('cart_modal', 'cart', 'translate-x-full')}>
                <CartIcon size={'17'} className="cursor-pointer" />
                <span className="absolute right-[-13px] top-[-10px] h-6 w-6 rounded-full bg-black text-center text-base font-bold text-white">
                    {cartCounter}
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
                        className="absolute right-0 top-2/4 -translate-y-2/4 text-3xl transition-opacity hover:opacity-50"
                        onClick={() => handleCloseMobileMenu('cart_modal', 'cart', 'translate-x-full')}
                    >
                        <HiArrowNarrowRight />
                    </button>
                </div>

                {cartItemList.map((ele, idx) => (
                    <CartItem data={ele} key={idx} />
                ))}

                <div className="flex items-center justify-between px-8 py-8 text-2xl">
                    <h3>Total</h3>
                    <span className="">{formatCurrency(caculatedTotalCart)}</span>
                </div>
            </Modal>
        </div>
    );
}

export default Cart;
