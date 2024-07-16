import { useDispatch } from 'react-redux';
import { HiOutlineX } from 'react-icons/hi';
import formatCurrency from '../../../Utils/currencyFormat';
import { deleteCartItem } from '../../../reduxCore/reducer/cartReducer';
import { Link } from 'react-router-dom';
import { handleCloseMobileMenu } from '../../../Utils/mobileNavFunction';

function CartItem({ data = {} }) {
    const dispatch = useDispatch();
    const handleDeleleItem = (id) => {
        dispatch(deleteCartItem(id));
    };

    return (
        <div className="flex w-full select-none items-center justify-between border-b-[1px] border-black text-xl">
            <div className="mr-4 basis-1/3 py-4 pr-4">
                <img src={data.images[0]} alt="" className="object-cover md:max-lg:mx-auto md:max-lg:h-[200px]" />
            </div>
            <div className="relative basis-2/3 py-[15px] pr-8">
                <button
                    className="absolute right-0 transition-opacity hover:opacity-50"
                    onClick={() => handleDeleleItem(data)}
                >
                    <HiOutlineX />
                </button>
                <Link
                    className="transition-opacity hover:opacity-50"
                    to={`/product/${data.url.toLowerCase()}-${data.id}`}
                    onClick={() => handleCloseMobileMenu('cart_modal', 'cart', 'translate-x-full')}
                >
                    <h3 className="text-[12px] font-semibold uppercase">{data.name}</h3>
                </Link>

                <p className="mb-[8px] mt-[5px] text-[12px] capitalize opacity-70">
                    <span>{data.colorDesc}</span> / <span>{data.fabric}</span> / <span>{data.size}</span>
                </p>

                <div className="flex items-center justify-between">
                    <span className="border px-5 py-3">{data.numberOfItem}</span>
                    <p className="text-[14px] opacity-70">{formatCurrency(data.price * data.numberOfItem)}</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
