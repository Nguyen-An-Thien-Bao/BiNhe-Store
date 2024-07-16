function CarouselItem({ src = '' }) {
    return (
        <div className="h-full w-full flex-shrink-0 snap-center overflow-hidden">
            <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
    );
}

export default CarouselItem;
