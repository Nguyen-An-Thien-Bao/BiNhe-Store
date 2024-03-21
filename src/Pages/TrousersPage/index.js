import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { cyanImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function TrousersPage() {
    const pageTitle = 'trousers';
    const dataCate = 'dresses_Jumpsuits';
    const itemCategory = 'trousers';
    useEffect(() => {
        generalFunction('Trousers');
    });
    return (
        <div>
            <CollectionHeader Bg_image={cyanImage} title={pageTitle} />
            <CollectionBody collectionTitle={pageTitle} dataCategory={dataCate} itemCategory={itemCategory} />
            <Footer />
        </div>
    );
}

export default TrousersPage;
