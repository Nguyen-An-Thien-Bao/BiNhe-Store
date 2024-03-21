import { SearchIcon } from '../../assets/icons';
import Modal from '../Modal';
import { CloseBtn } from '../../assets/icons';
import { handleCloseMobileMenu, handleOpenMobileMenu } from '../../Utils/mobileNavFunction';
import { useState } from 'react';

function SearchBox() {
    const [search, setSearchValue] = useState('');
    return (
        <div className={' outline-non flex items-center rounded-3xl p-4 lg:mr-14 lg:justify-between'}>
            <button onClick={() => handleOpenMobileMenu('searchBox_modal', 'searchBox', 'translate-x-full')}>
                <SearchIcon size="20" className="relative cursor-pointer max-lg:left-2/4 max-lg:-translate-x-2/4" />
            </button>

            <Modal
                id="searchBox"
                modal_ID="searchBox_modal"
                translate="translate-x-full"
                className="right-0 top-0 w-full translate-x-full overflow-y-scroll px-12 pb-40 pt-16 sm:max-md:w-4/6 lg:w-2/6"
            >
                <div className="relative">
                    <h2 className="px-8 py-8 text-2xl">Search</h2>
                    <button
                        className="absolute right-0 top-3 p-4 transition-opacity hover:opacity-50"
                        onClick={() => handleCloseMobileMenu('searchBox_modal', 'searchBox', 'translate-x-full')}
                    >
                        <CloseBtn />
                    </button>
                </div>
                <div>
                    <input
                        value={search}
                        type="text"
                        placeholder="Search for items, product codes..."
                        className="mr-14 hidden text-xl outline-none lg:block"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <SearchIcon size="20" className="relative cursor-pointer max-lg:left-2/4 max-lg:-translate-x-2/4" />
                </div>
            </Modal>
        </div>
    );
}

export default SearchBox;
