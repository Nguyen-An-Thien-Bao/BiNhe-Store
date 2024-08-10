import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { denimImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function DenimPage() {
    const pageTitle = 'denim wear';
    const dataCate = 'collections';
    const itemCategory = 'denim';
    useEffect(() => {
        renameWebPage('Demin Wear');
    });
    return (
        <div>
            <CollectionHeader Bg_image={denimImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default DenimPage;
