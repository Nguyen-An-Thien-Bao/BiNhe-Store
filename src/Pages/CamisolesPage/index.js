import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';

function CamisolesPage() {
    useEffect(() => {
        generalFunction('Camisoles');
    });
    return (
        <div className="h-[4000px] w-full bg-slate-200">
            <div className="sticky top-0 h-[300px] bg-pink-200">
                <h1 className="">Camisoles Page</h1>
            </div>
        </div>
    );
}

export default CamisolesPage;
