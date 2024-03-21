import { useState } from 'react';

import ProductSize from '../ProductSize';
import ProductDiscount from '../ProductDiscount';
import Button from '../../../Button';

function ProductForm({ productData }) {
    const [itemNumber, setItemNumber] = useState(1);

    const handleSetItemNumber = (id = '', e) => {
        if (id === 'decrement') {
            itemNumber === 1 ? setItemNumber((prev) => prev) : setItemNumber((prev) => prev - 1);
        } else if (id === 'increment') {
            setItemNumber((prev) => prev + 1);
        } else {
            setItemNumber(e);
        }
    };
    return (
        <div>
            <div className="border-b-[1px] border-[#ccc] py-4 text-[13px]">
                <p className="mb-[8px]">Printed</p>
                <span className="inline-block h-16 w-16 rounded-full border border-black p-[3px]">
                    <span className="inline-block h-full w-full rounded-full border border-[#ccc] bg-red-500"></span>
                </span>
            </div>
            <div className="border-b-[1px] border-[#ccc] py-4 text-[12px] capitalize">
                <span className="inline-block h-16 min-w-[40px] border border-black px-4 text-center leading-[40px]">
                    cotton
                </span>
            </div>
            <ProductSize productSize={productData.size} />
            <ProductDiscount />
            <div className="mb-6 mt-12 text-[14px]">
                <button className="h-[32px] w-[32px] bg-[#f2f5fa]" onClick={() => handleSetItemNumber('decrement')}>
                    -
                </button>
                <input
                    onChange={(e) => handleSetItemNumber('', e.target.value)}
                    value={itemNumber}
                    className="inline-block h-[32px] w-[72px] border-y-[1px] border-[#f2f5fa] text-center outline-none"
                />
                <button className="h-[32px] w-[32px] bg-[#f2f5fa]" onClick={() => handleSetItemNumber('increment')}>
                    +
                </button>
            </div>
            <Button className="mb-[16px] w-[70%] font-semibold lg:w-2/4" children={'add to bag'} border size="exlg" />
        </div>
    );
}

export default ProductForm;
