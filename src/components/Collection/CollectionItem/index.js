import { Link } from 'react-router-dom';
import { VND } from '../../../Utils/currencyFormat';

function CollectionItem({ item = {} }) {
    return (
        <div className="relative mb-4 px-[7px]">
            <span
                className={`absolute right-6 top-2 min-w-[70px] ${
                    item.status === 'new-in' ? 'bg-[#E1E65C]' : 'bg-[#FC4724]'
                }  z-10 px-2 text-center text-[11px] uppercase leading-8`}
            >
                {item.status}
            </span>
            <Link to={`/product/${item.url.toLowerCase()}-${item.id}`} className="group block">
                <img className="h-full w-full object-cover lg:group-hover:hidden" src={item.images[0]} alt="" />
                <img className="hidden h-full w-full object-cover lg:group-hover:block" src={item.images[1]} alt="" />
            </Link>
            <div className="px-[1px] py-6 text-2xl font-thin">
                <h3 className="mb-[5px] line-clamp-1 overflow-hidden transition-opacity hover:opacity-50">
                    <Link to={`/product/${item.url.toLowerCase()}-${item.id}`}>{item.name}</Link>
                </h3>
                <p>{`${VND.format(item.price)}`}</p>
            </div>
        </div>
    );
}

export default CollectionItem;
