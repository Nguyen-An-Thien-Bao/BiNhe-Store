import { Link } from 'react-router-dom';
import formatCurrency from '../../../Utils/currencyFormat';

function CollectionItem({ item = {} }) {
    return (
        <div className="relative mb-4 px-[7px]">
            <span
                className={`absolute right-6 top-2 min-w-[70px] ${
                    item.status === 'new in' ? 'bg-[#E1E65C]' : 'bg-[#FC4724]'
                }  z-10 px-2 text-center text-[11px] uppercase leading-8`}
            >
                {item.status}
            </span>
            <Link to={`/product/${item.url.toLowerCase()}-${item.id}`} className="group relative block">
                <img
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity duration-500 ease-in-out lg:group-hover:opacity-0"
                    src={item.images[0]}
                    alt=""
                />
                <img
                    loading="lazy"
                    className="absolute top-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out lg:group-hover:opacity-100"
                    src={item.images[1]}
                    alt=""
                />
            </Link>
            <div className="px-[1px] py-6 text-2xl font-thin">
                <h3 className="mb-[5px] line-clamp-1 overflow-hidden transition-opacity hover:opacity-50">
                    <Link to={`/product/${item.url.toLowerCase()}-${item.id}`}>{item.name}</Link>
                </h3>
                <p>{`${formatCurrency(item.price)}`}</p>
            </div>
        </div>
    );
}

export default CollectionItem;
