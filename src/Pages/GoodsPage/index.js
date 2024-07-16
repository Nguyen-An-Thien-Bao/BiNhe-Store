import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { goodsImages } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function GoodsPage() {
    const pageTitle = 'GOODS';
    const dataCate = 'collections';
    const itemCategory = 'goods';
    useEffect(() => {
        generalFunction('Goods');
    });
    return (
        <div>
            <CollectionHeader Bg_image={goodsImages} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default GoodsPage;
