import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../configs/firestore';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import CollectionPagination from '../Pagination';

const CollectionItem = lazy(() => import('../CollectionItem'));

function CollectionBody({ collectionTitle = '', dataCategory = '', itemCategory = '' }) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageItem, setTotalPageItem] = useState(8);
    const collectionRef = useRef();

    const lastItem = currentPage * totalPageItem;
    const firstItem = lastItem - totalPageItem;
    const currentPost = data.slice(firstItem, lastItem);

    const getData = async () => {
        let q;
        itemCategory !== ''
            ? (q = query(collection(db, dataCategory), where('category', '==', itemCategory)))
            : (q = collection(db, dataCategory));
        const querySnapshot = await getDocs(q);

        // const querySnapshot = await getDocs(collection(db, dataCategory));
        console.log(querySnapshot.docs);
        const dataResult = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(dataResult);
    };

    useEffect(() => {
        getData();
    }, [currentPage]);

    return (
        <div ref={collectionRef} className="lg:px-10" id="collection_section">
            <div className="flex items-center justify-between px-[10px] text-2xl">
                <div className="my-6">
                    <h3 className="uppercase">{collectionTitle}</h3>
                </div>
                <div>
                    <select id="collection_filter" className="border-b-[1px] border-black py-2 outline-none">
                        <option>Sort by:</option>
                        <option>Giá: Tăng dần</option>
                        <option>Giá: Giảm dần</option>
                        <option>Tên: A-Z</option>
                        <option>Tên: Z-A</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 px-[3px] lg:mt-4 lg:grid-cols-4 lg:px-10">
                {currentPost.map((ele, idx) => (
                    <Suspense key={idx} fallback={<h3>loading</h3>}>
                        <CollectionItem item={ele} />
                    </Suspense>
                ))}
            </div>
            <CollectionPagination
                collection_Ref={collectionRef.current}
                setCurrentPage={setCurrentPage}
                totalPageItem={totalPageItem}
                totalItem={data.length}
            />
        </div>
    );
}
export default CollectionBody;
