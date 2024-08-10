import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { greenImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function TopsPage() {
    const pageTitle = 'Product';
    const dataCate = 'collections';
    const itemCategory = 't-shirt';
    useEffect(() => {
        renameWebPage('Tops');
    });
    return (
        <div>
            <CollectionHeader Bg_image={greenImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default TopsPage;
