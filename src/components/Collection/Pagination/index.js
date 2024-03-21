function CollectionPagination({ setCurrentPage, totalPageItem, totalItem, collection_Ref }) {
    const page = [];
    for (let i = 1; i <= Math.ceil(totalItem / totalPageItem); i++) {
        page.push(i);
    }

    const handleChangingPage = (pageNumber) => {
        let headerHeight;
        document.body.clientWidth >= 1024 ? (headerHeight = 100) : (headerHeight = 60);
        setCurrentPage(pageNumber);
        window.scrollTo(0, collection_Ref.offsetTop - headerHeight);
    };

    return (
        <div className="flex justify-center">
            {page.map((ele, idx) => (
                <button className="mx-4 border p-4 text-2xl" key={idx} onClick={() => handleChangingPage(ele)}>
                    {ele}
                </button>
            ))}
        </div>
    );
}

export default CollectionPagination;
