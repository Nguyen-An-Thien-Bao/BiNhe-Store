import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';

function GoodsPage() {
    useEffect(() => {
        generalFunction('Goods');
    });
    return (
        <div className="h-[4000px] w-full bg-slate-200">
            <div className="sticky top-0 h-[300px] bg-pink-200">
                <h1 className="">Goods Page</h1>
            </div>
        </div>
    );
}

export default GoodsPage;
