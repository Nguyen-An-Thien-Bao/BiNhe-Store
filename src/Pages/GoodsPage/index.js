import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { goodsImages } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function GoodsPage() {
    const pageTitle = 'GOODS';
    const dataCate = 'collections';
    const itemCategory = 'goods';
    useEffect(() => {
        renameWebPage('Goods');
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
