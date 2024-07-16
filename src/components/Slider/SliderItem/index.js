import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';
import formatCurrency from '../../../Utils/currencyFormat';
import Button from '../../Button';

function SliderItem({ data = {} }) {
    return (
        <div className="inline-block w-[216px] flex-shrink-0 select-none">
            <div className="w-[200px]">
                <Link
                    target="_blank"
                    to={`/product/${data.url.toLowerCase()}-${data.id}`}
                    className="block aspect-square w-full overflow-hidden rounded-[8px] border-[#ccc]"
                >
                    <img className="h-full w-full object-cover" src={data.images[0]} alt="" />
                </Link>
                <Link target="_blank" to={`/product/${data.url.toLowerCase()}-${data.id}`}>
                    <p className="mt-6 line-clamp-2 min-h-[40px] text-[14px] capitalize leading-8 transition-opacity hover:opacity-70">
                        {data.name}
                    </p>
                </Link>

                {data.stock === undefined ? (
                    <p className="text-xl text-[#000000] opacity-30">Đã hết hàng</p>
                ) : (
                    <p className="my-[6px] text-xl">Còn {data.stock} sản phẩm</p>
                )}
                <div className="flex gap-[6px]">
                    <span className="text-[14px] font-semibold leading-8 text-[#ef4343]">
                        {formatCurrency((data.price * 80) / 100)}
                    </span>
                    <span className="text-[14px] leading-8 text-[#4b5563] line-through">
                        {formatCurrency(data.price)}
                    </span>
                </div>
                <Button
                    className="mt-[12px] flex w-full items-center justify-center gap-[8px] rounded-[20px] px-[14px] py-[10px] font-semibold lowercase"
                    border
                    size="md"
                    LeftIcon={<BsCartPlus />}
                    leftTextProp={{ className: 'text-5xl' }}
                >
                    {
                        <Link target="_blank" to={`/product/${data.url.toLowerCase()}-${data.id}`}>
                            <span className="capitalize">thêm </span>
                            vào giỏ
                        </Link>
                    }
                </Button>
            </div>
        </div>
    );
}

export default React.memo(SliderItem);
