function ProductSize({ productSize = [] }) {
    return (
        <div className="border-b-[1px] border-[#ccc] py-4 text-[12px]">
            {productSize.map((ele, idx) => (
                <button
                    key={idx}
                    className="mr-[8px] inline-block h-16 w-16 border border-[#ccc] px-4 text-center uppercase leading-[40px]"
                >
                    {ele}
                </button>
            ))}
        </div>
    );
}

export default ProductSize;
