import React, { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { orangeImage } from '../../assets/collectionHeader';
import CollectionBody from '../../components/Collection/CollectionBody';
import Footer from '../../components/Footer';

function DressesPage() {
    const pageTitle = 'Dresses & Jumpsuits';
    const dataCate = 'collections';
    const itemCategory = 'dresses';
    useEffect(() => {
        renameWebPage('Dresses & Jumpsuits');
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
