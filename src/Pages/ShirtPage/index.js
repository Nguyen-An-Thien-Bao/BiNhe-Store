import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { greenImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function ShirtPage() {
    const pageTitle = 'T-shirt';
    const dataCate = 'collections';
    const itemCategory = 't-shirt';
    useEffect(() => {
        renameWebPage('T-shirt');
    });
    return (
        <div>
            <CollectionHeader Bg_image={greenImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default ShirtPage;
