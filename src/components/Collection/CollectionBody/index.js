import { Suspense, lazy, useRef, useState } from 'react';
import CollectionPagination from '../Pagination';
import { useFetch } from '../../../hooks';

const CollectionItem = lazy(() => import('../CollectionItem'));

function CollectionBody({
    collectionTitle = '',
    dataCategory = '',
    itemCategory = '',
    collectionField = 'categoryName',
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageItem, setTotalPageItem] = useState(8);

    const [data, loading] = useFetch({
        collectionTitle,
        dataCategory,
        itemCategory,
        collectionField,
        currentPage,
    });
    const collectionRef = useRef();
    console.log(data);

    const lastItem = currentPage * totalPageItem;
    const firstItem = lastItem - totalPageItem;
    let currentPost = data.slice(firstItem, lastItem);

    if (loading) {
        return <div>loading...</div>;
    }

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
            {data.length === 0 ? (
                <p className="ml-4 text-2xl">Chưa có sản phẩm nào trong danh mục này.</p>
            ) : (
                <>
                    <div className="grid grid-cols-2 px-[3px] lg:mt-4 lg:grid-cols-4 lg:px-10">
                        {currentPost &&
                            currentPost.map((ele, idx) => (
                                <Suspense
                                    key={idx}
                                    fallback={
                                        <div className="h-full w-full bg-slate-400">
                                            <span className="animate-pulse">loading</span>
                                        </div>
                                    }
                                >
                                    <CollectionItem item={ele} />
                                </Suspense>
                            ))}
                    </div>
                    <CollectionPagination
                        collection_Ref={collectionRef.current}
                        setCurrentPage={setCurrentPage}
                        totalPageItem={totalPageItem}
                        totalItem={data.length}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
}
export default CollectionBody;
