import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import Footer from '../../components/Footer';
import ProductInfo from '../../components/ProductInfo';

function ProductPage() {
    useEffect(() => {
        renameWebPage('Product');
    });
    return (
        <div className="">
            <ProductInfo />
            <Footer />
        </div>
    );
}

export default ProductPage;
