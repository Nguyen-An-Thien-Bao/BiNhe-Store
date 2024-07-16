import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOpenMobileMenu } from '../../../../Utils/mobileNavFunction';
import { addCartItem } from '../../../../reduxCore/reducer/cartReducer';
import ProductDiscount from '../ProductDiscount';
import Button from '../../../Button';

function ProductForm({ productData }) {
    const [itemNumber, setItemNumber] = useState(1);
    const [itemSize, setItemSize] = useState(productData.size[0]);
    const sizeRef = useRef();
    const dispatch = useDispatch();

    const productForm = {
        ...productData,
        size: itemSize,
        numberOfItem: itemNumber,
        itemDiscount: null,
    };

    const handleSetItemNumber = (id = '', e) => {
        if (id === 'decrement') {
            itemNumber === 1 ? setItemNumber((prev) => prev) : setItemNumber((prev) => prev - 1);
        } else if (id === 'increment') {
            setItemNumber((prev) => prev + 1);
        } else {
            if (!isNaN(e) && typeof e === 'number' && isFinite(e)) {
                let tempInput = Math.round(Number(e));
                setItemNumber(tempInput);
            } else {
                setItemNumber(1);
            }
        }
    };

    const handleAddProduct = () => {
        handleOpenMobileMenu('cart_modal', 'cart', 'translate-x-full');
        dispatch(addCartItem(productForm));
    };

    const handleChangedSize = (e) => {
        const tempComp = sizeRef.current.childNodes;
        for (let i = 0; i < tempComp.length; i++) {
            sizeRef.current.childNodes[i].childNodes[0].checked = false;
            sizeRef.current.childNodes[i].classList.remove('border-black');
        }
        e.target.checked = true;
        e.target.offsetParent.classList.add('border-black');
        setItemSize(e.target.value);
    };

    console.log(productData);

    return (
        <div>
            <div className="border-b-[1px] border-[#ccc] py-4 text-[13px]">
                <p className="mb-[8px] capitalize">{productData.colorDesc}</p>
                <span className="inline-block h-16 w-16 rounded-full border border-black p-[3px]">
                    <span
                        style={{ backgroundColor: productData.color }}
                        className={`inline-block h-full w-full rounded-full border border-[#ccc]`}
                    ></span>
                </span>
            </div>
            <div className="border-b-[1px] border-[#ccc] py-4 text-[12px] capitalize">
                <span className="inline-block h-16 min-w-[40px] border border-black px-4 text-center leading-[40px]">
                    {productData.fabric}
                </span>
            </div>

            <div ref={sizeRef} className="border-b-[1px] border-[#ccc] py-4 text-[12px]">
                {productData.size.map((ele, idx) => (
                    <div
                        value={ele}
                        key={idx}
                        className={`relative mr-[8px] inline-block h-16 w-16 border ${
                            ele === productData.size[0] ? 'border-black' : 'border-[#ccc]'
                        } text-center uppercase leading-[40px]`}
                    >
                        <input
                            className="absolute left-0 h-full w-full cursor-pointer opacity-0"
                            type="checkbox"
                            value={ele}
                            onChange={(e) => handleChangedSize(e)}
                        />
                        <span>{ele}</span>
                    </div>
                ))}
            </div>

            <ProductDiscount />
            <div className="mb-6 mt-12 text-[14px]">
                <button className="h-[32px] w-[32px] bg-[#f2f5fa]" onClick={() => handleSetItemNumber('decrement')}>
                    -
                </button>
                <input
                    onChange={(e) => handleSetItemNumber('', Number(e.target.value))}
                    value={itemNumber}
                    className="inline-block h-[32px] w-[72px] border-y-[1px] border-[#f2f5fa] text-center outline-none"
                />
                <button className="h-[32px] w-[32px] bg-[#f2f5fa]" onClick={() => handleSetItemNumber('increment')}>
                    +
                </button>
            </div>
            <Button
                className="mb-[16px] w-[70%] font-semibold lg:w-2/4"
                children={'add to bag'}
                border
                size="exlg"
                onClick={handleAddProduct}
            />
        </div>
    );
}

export default ProductForm;
