function HeroSection() {
    return (
        <section className="flex flex-col bg-primary-Color md:flex-row">
            <div className="w-full">
                <img
                    className="w-full object-cover"
                    // src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img1.jpg?v=1813"
                    src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img1.jpg?v=1800"
                    alt=""
                />
            </div>
            <div className="flex w-full flex-wrap">
                <img
                    className="w-full object-cover"
                    src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img2.jpg?v=1800"
                    alt=""
                />
                <div className="flex">
                    <img
                        className="w-[50%] object-cover"
                        src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img3.jpg?v=1800"
                        alt=""
                    />
                    <img
                        className="w-[50%] object-cover"
                        src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img4.jpg?v=1800"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
