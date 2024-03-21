import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firestore';
import { useLocation } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import ProductDetail from './ProductDetail';

function ProductInfo() {
    let location = useLocation();
    const id = location.pathname.split('-');
    const [productData, setProductData] = useState({});
    const [productImage, setProductImage] = useState([]);

    const getProductInfo = async () => {
        const docRef = doc(db, 'dresses_Jumpsuits', id[id.length - 1]);
        const docSnap = await getDoc(docRef);
        const docResult = docSnap.data();
        setProductImage(docResult.images);
        setProductData(docResult);
    };

    useEffect(() => {
        getProductInfo();
    }, []);
    return (
        <div className="px-6 lg:px-4">
            <div className="py-4 text-[10px] leading-8 text-[#777777]">
                <span className="capitalize">{productData.category}</span> / {productData.name}
            </div>
            <div className="lg:grid lg:grid-cols-12 lg:items-start lg:self-start">
                <ImageGallery productImage={productImage} />
                <ProductDetail productData={{ id: id[id.length - 1], size: ['s', 'm', 'l'], ...productData }} />
            </div>
        </div>
    );
}

export default ProductInfo;
