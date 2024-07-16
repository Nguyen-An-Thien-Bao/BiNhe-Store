import formatCurrency from '../../../Utils/currencyFormat';
import Button from '../../Button';
import ProductForm from './ProductForm';

function ProductDetail({ productData = {} }) {
    return (
        <div className={`lg:sticky lg:top-[100px] lg:col-span-5 lg:px-[15px]`}>
            <div className="mb-2 mt-4 border-b-[1px] border-[#ccc] pb-4 pt-[65px] lg:m-0 lg:pt-0">
                <h1 className="text-[26px] font-bold lg:mb-2">{productData.name}</h1>
                <span className="text-[12px]">SKU: {productData.id}</span>
            </div>
            <div className="border-b-[1px] border-[#ccc] py-4 text-[18px] font-semibold">
                <span>{formatCurrency(productData.price)}</span>
            </div>

            <ProductForm productData={productData} />
            <Button className="w-[70%] font-semibold lg:w-2/4" children={'find your size'} border size="exlg" />

            {/* Product Description */}
            <div className="my-8 text-[14px] leading-9">
                <h2 className="font-semibold uppercase">product detail</h2>
                <p className="border-b-[1px] border-[#ccc] py-8">
                    Đầm trễ vai, ôm thân trên, xòe nhún thân dưới, ngắn trên gối, cổ ngang luồn thun tạo độ bám, phối
                    bèo viền cổ và ngang eo.
                </p>
                <div className="border-b-[1px] border-[#ccc] py-8">
                    <h2 className="mb-[13px] font-semibold">Thông số sản phẩm:</h2>
                    <ul>
                        <li className="mb-[13px]">Chất liệu: Cotton</li>
                        <li className="mb-[13px]">Màu sắc: Printed</li>
                        <li className="mb-[13px]">Size S: Dài đầm 66cm ; Vòng ngực 66cm ; Vòng eo 61cm</li>
                        <li className="mb-[13px]">Size M: Dài đầm 67cm ; Vòng ngực 70cm ; Vòng eo 65cm</li>
                        <li className="">Size L: Dài đầm 68cm ; Vòng ngực 74cm ; Vòng eo 69cm</li>
                    </ul>
                </div>
                <p className="my-8">
                    Lưu ý: Sản phẩm trên ảnh và thực tế có sự chênh lệch màu không đáng kể do điều kiện ánh sáng hoặc
                    màn hình thiết bị hiển thị.
                </p>
            </div>
        </div>
    );
}

export default ProductDetail;
