import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
function WomenPage() {
    useEffect(() => {
        generalFunction('Women');
    });
    return (
        <div>
            <h1>Women Page</h1>
        </div>
    );
}

export default WomenPage;
