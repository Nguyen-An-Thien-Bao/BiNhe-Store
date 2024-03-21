function BannerItem({ text }) {
    return (
        <a href="/" className="px-8 py-4 text-3xl uppercase odd:font-thin even:font-bold">
            {text}
        </a>
    );
}

export default BannerItem;
