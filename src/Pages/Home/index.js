import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';

function HomePage() {
    useEffect(() => {
        generalFunction('Home');
    });
    return (
        <div>
            <Hero />
            <Banner />
            <Carousel />
            <Slider />
            <Footer />
        </div>
    );
}

export default HomePage;
