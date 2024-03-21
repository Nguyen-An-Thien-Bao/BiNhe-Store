import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Footer from '../../components/Footer';
import ProductInfo from '../../components/ProductInfo';

function ProductPage() {
    useEffect(() => {
        generalFunction('Item');
    });
    return (
        <div className="">
            <ProductInfo />
            <Footer />
        </div>
    );
}

export default ProductPage;
