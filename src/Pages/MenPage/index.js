import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { orangeImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';
import CollectionBody from '../../components/Collection/CollectionBody';

function MenPage() {
    const pageTitle = 'Dresses & Jumpsuits';
    const dataCate = 'dresses_Jumpsuits';
    const itemCategory = 'dresses-jumpsuits';
    useEffect(() => {
        generalFunction('Men');
    });
    return (
        <div>
            <CollectionHeader Bg_image={orangeImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default MenPage;
