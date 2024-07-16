import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { denimImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function DenimPage() {
    const pageTitle = 'denim wear';
    const dataCate = 'collections';
    const itemCategory = 'denim';
    useEffect(() => {
        generalFunction('Demin Wear');
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
