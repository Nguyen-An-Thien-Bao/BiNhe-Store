import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { orangeImage } from '../../assets/collectionHeader';
import CollectionBody from '../../components/Collection/CollectionBody';
import Footer from '../../components/Footer';

function DressesPage() {
    const pageTitle = 'Dresses & Jumpsuits';
    const dataCate = 'dresses_Jumpsuits';
    const itemCategory = 'dresses-jumpsuits';
    useEffect(() => {
        generalFunction('Dresses');
    });
    return (
        <div>
            <CollectionHeader Bg_image={orangeImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default DressesPage;
