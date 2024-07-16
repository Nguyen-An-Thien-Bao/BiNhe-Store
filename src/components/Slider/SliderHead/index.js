import { FlashSale } from '../../../assets/icons';

function SliderHead() {
    return (
        <div className="flex flex-col items-center justify-center border-b-[1px] border-[#ccc] px-[16px] py-[18px]">
            <div>
                <div className="mx-auto w-[100px]">
                    <FlashSale />
                </div>
                <p className="text-[20px] font-semibold uppercase leading-[28px] text-[#111827]">last chance to buy</p>
            </div>
        </div>
    );
}

export default SliderHead;
