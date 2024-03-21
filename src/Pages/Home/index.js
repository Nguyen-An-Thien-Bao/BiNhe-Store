import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';

function HomePage() {
    useEffect(() => {
        generalFunction('Home');
    });
    return (
        <div>
            <Hero />
            <Banner />
            <Slider />
            <Footer />
        </div>
    );
}

export default HomePage;
