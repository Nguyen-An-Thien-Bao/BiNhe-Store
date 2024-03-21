import DiscountTag from './DiscountTag';

function ProductDiscount() {
    return (
        <div className="mt my-[16px] rounded-[10px] bg-[#f5ef32] p-[16px]">
            <div className="mb-[16px] flex justify-between">
                <h3 className="text-[16px] font-semibold">Mã khuyến mãi</h3>
                <button className="text-[14px] underline">Xem tất cả</button>
            </div>
            <div className="flex gap-4">
                <DiscountTag discountTitle="Giảm ship 100%" />
                <DiscountTag discountTitle="Giảm 8%" />
            </div>
        </div>
    );
}

export default ProductDiscount;
