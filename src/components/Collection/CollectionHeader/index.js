function CollectionHeader({ title, Bg_image }) {
    return (
        <div className="relative overflow-y-hidden">
            <img src={Bg_image} alt="" />
            <div className="absolute left-2/4 top-0 flex h-full w-full -translate-x-2/4 flex-col items-center justify-center px-4 text-2xl md:flex-row md:justify-between lg:px-24">
                <h2 className="mt-6 w-full text-center text-5xl font-bold uppercase lg:text-left lg:text-[48px]">
                    {title}
                </h2>
                <p className="mt-6 w-full text-right text-3xl leading-10">
                    Save your time; our latest collection of feel-good and easy-to-wear
                    <br />
                    dresses/jumpsuits is perfect for anytime.
                </p>
            </div>
        </div>
    );
}

export default CollectionHeader;
