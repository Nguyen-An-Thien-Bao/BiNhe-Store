import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { VND } from '../../../Utils/currencyFormat';

function CartItem({ data = {} }) {
    const [count, setCount] = useState(0);

    const handleChangedNumberOfItem = (id = '') => {
        if (id === 'increment') {
            setCount((prev) => (prev += 1));
        } else {
            count <= 0 ? setCount(0) : setCount((prev) => (prev -= 1));
        }
    };
    return (
        <div className="flex w-full select-none items-center justify-between border-b-[1px] border-black text-xl">
            <div className="mr-4 basis-1/3 py-4 pr-4">
                <img
                    src="https://product.hstatic.net/1000370106/product/10.1_1c80894606584034aff31bae71d8d585_master.jpg"
                    alt=""
                    className="object-cover md:max-lg:mx-auto md:max-lg:h-[200px]"
                />
            </div>
            <div className="basis-2/3 py-[15px] pr-8">
                <h3 className="text-[12px] font-extrabold uppercase">{data.name}</h3>
                <p className="mb-[8px] mt-[5px] text-[12px] capitalize opacity-70">
                    <span>{data.color}</span> / <span>{data.material}</span> / <span>{data.size}</span>
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex w-[30px] flex-col items-center justify-center">
                        <button onClick={() => handleChangedNumberOfItem('increment')}>
                            <HiChevronUp />
                        </button>
                        <input
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-full border p-2 text-center outline-none"
                        />
                        <button onClick={() => handleChangedNumberOfItem('decrement')}>
                            <HiChevronDown />
                        </button>
                    </div>
                    <p className="text-[14px] opacity-70">{VND.format(data.price * count)}</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
