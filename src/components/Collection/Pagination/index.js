import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

function CollectionPagination({ setCurrentPage, totalPageItem, totalItem, collection_Ref, currentPage }) {
    const [pageParams, setPageParams] = useSearchParams();
    const page = [];
    for (let i = 1; i <= Math.ceil(totalItem / totalPageItem); i++) {
        page.push(i);
    }

    const handleChangingPage = (pageNumber) => {
        let headerHeight;
        document.body.clientWidth >= 1024 ? (headerHeight = 100) : (headerHeight = 60);
        setCurrentPage(pageNumber);
        window.scrollTo(0, collection_Ref.offsetTop - headerHeight);
        setPageParams(pageNumber);
    };

    const handleChangingPageByArrow = (direction = '') => {
        let headerHeight;
        document.body.clientWidth >= 1024 ? (headerHeight = 100) : (headerHeight = 60);
        if (direction === 'increment') {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, collection_Ref.offsetTop - headerHeight);
    };
    console.log(pageParams);
    return (
        <div className="flex justify-center">
            {currentPage === 1 || (
                <button className="text-3xl" onClick={() => handleChangingPageByArrow('decrement')}>
                    <HiArrowLongLeft />
                </button>
            )}
            {page.map((ele, idx) => (
                <button
                    className={`mx-4 ${idx + 1 === currentPage ? 'border-black' : 'border-[#ccc]'} border p-4 text-2xl`}
                    key={idx}
                    onClick={() => handleChangingPage(ele)}
                >
                    {ele}
                </button>
            ))}
            {currentPage >= totalItem / totalPageItem || (
                <button className="text-3xl" onClick={() => handleChangingPageByArrow('increment')}>
                    <HiArrowLongRight />
                </button>
            )}
        </div>
    );
}

export default CollectionPagination;
