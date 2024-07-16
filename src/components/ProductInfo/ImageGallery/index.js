function ImageGallery({ productImage = [] }) {
    return (
        <div className="flex flex-col gap-y-4  border-b-[1px] border-[#ccc] pb-4 lg:col-span-7 lg:border-none lg:px-[15px]">
            {productImage.map((ele, idx) => (
                <img loading="lazy" src={ele} key={idx} alt="" className="object-cover" />
            ))}
        </div>
    );
}

export default ImageGallery;
