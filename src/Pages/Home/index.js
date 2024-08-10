import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import CarouselV2 from '../../components/CarouselV2';

function HomePage() {
    useEffect(() => {
        generalFunction('Home');
    });
    return (
        <div>
            <Hero />
            <Banner />
            <CarouselV2 />
            <Slider />
            <Footer />
        </div>
    );
}

export default HomePage;
