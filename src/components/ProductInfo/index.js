import { useEffect, useState } from 'react';
import { doc, getDoc, query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../configs/firestore';
import { Link, useLocation } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import ProductDetail from './ProductDetail';
import SliderBody from '../Slider/SliderBody';
import CollectionItem from '../Collection/CollectionItem';

function ProductInfo() {
    let location = useLocation();
    const id = location.pathname.split('-');
    const [productData, setProductData] = useState({});
    const [productImage, setProductImage] = useState([]);
    const [similarProductList, setSimilarProductList] = useState([]);

    const getProductInfo = async () => {
        const docRef = doc(db, 'collections', id[id.length - 1]);
        const docSnap = await getDoc(docRef);
        const docResult = docSnap.data();
        console.log('x', docResult);
        setProductData(docResult);
        setProductImage(docResult.images);

        let q = query(collection(db, 'collections'));
        const querySnapshot = await getDocs(q);
        const dataResult = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSimilarProductList(dataResult);
    };

    useEffect(() => {
        getProductInfo();
    }, [location]);
    return (
        <>
            <div className="px-6 lg:px-4">
                <div className="py-4 text-[10px] leading-8 text-[#777777]">
                    <span className="capitalize">
                        <Link to={`/collection/${productData.categoryName}`}>{productData.categoryName}</Link>
                    </span>{' '}
                    / {productData.name}
                </div>
                <div className="lg:grid lg:grid-cols-12 lg:items-start lg:self-start">
                    <ImageGallery productImage={productImage} />
                    <ProductDetail productData={{ id: id[id.length - 1], size: ['s', 'm', 'l'], ...productData }} />
                </div>
            </div>
            <div>
                <h3 className="my-[50px] text-center text-[28px] font-medium uppercase">related items</h3>
                <div className="overflow-hidden px-[16px]">
                    <SliderBody>
                        {similarProductList.map((ele, idx) => (
                            <div key={idx} className="inline-block w-[216px] flex-shrink-0">
                                <CollectionItem item={ele} />
                            </div>
                        ))}
                    </SliderBody>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;
