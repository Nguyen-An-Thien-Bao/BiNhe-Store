import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { greenImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function ShopPage() {
    const pageTitle = 'Product';
    // const dataCate = 'dresses_Jumpsuits';
    const dataCate = 'collections';
    const itemCategory = '';
    useEffect(() => {
        generalFunction('Shop');
    });
    return (
        <div>
            <CollectionHeader Bg_image={greenImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default ShopPage;
