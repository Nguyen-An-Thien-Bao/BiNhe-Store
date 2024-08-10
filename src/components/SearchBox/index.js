import { SearchIcon } from '../../assets/icons';
import Modal from '../Modal';
import { CloseBtn } from '../../assets/icons';
import { handleCloseMobileMenu, handleOpenMobileMenu } from '../../Utils/mobileNavFunction';
import { useState, useEffect } from 'react';
import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '../../configs/firestore';

function SearchBox() {
    const [search, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const getProductInfo = async () => {
        let q = query(collection(db, 'collections'));
        const querySnapshot = await getDocs(q);
        const dataResult = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(dataResult);
        setSearchResult(dataResult);
    };

    useEffect(() => {}, []);

    return (
        <div className={' outline-non flex items-center rounded-3xl p-4 lg:mr-14 lg:justify-between'}>
            <button onClick={() => handleOpenMobileMenu('searchBox_modal', 'searchBox', 'translate-x-full')}>
                <SearchIcon size="20" className="relative cursor-pointer max-lg:left-2/4 max-lg:-translate-x-2/4" />
            </button>

            <Modal
                id="searchBox"
                modal_ID="searchBox_modal"
                translate="translate-x-full"
                className="right-0 top-0 w-full translate-x-full overflow-y-scroll px-12 pb-40 pt-16 sm:max-md:w-4/6 lg:w-1/4"
            >
                <div className="relative">
                    <h2 className="px-8 py-8 text-2xl uppercase">Search</h2>
                    <button
                        className="absolute right-0 top-3 p-4 transition-opacity hover:opacity-50"
                        onClick={() => handleCloseMobileMenu('searchBox_modal', 'searchBox', 'translate-x-full')}
                    >
                        <CloseBtn />
                    </button>
                </div>
                <div className="mx-8 flex items-center justify-between bg-[#F3F5F9] p-8 ">
                    <input
                        value={search}
                        type="text"
                        placeholder="Search for items, product codes..."
                        className="mr-8 hidden w-full bg-transparent text-[15px] text-xl outline-none lg:block"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <SearchIcon
                        onClick={() => getProductInfo()}
                        size="20"
                        className="relative cursor-pointer max-lg:left-2/4 max-lg:-translate-x-2/4"
                    />
                </div>
                {/* {searchResult.map((ele) => (
                    <div>{ele.name}</div>
                ))} */}
            </Modal>
        </div>
    );
}

export default SearchBox;
