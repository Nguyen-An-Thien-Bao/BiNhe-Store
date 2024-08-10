import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';

function AboutPage() {
    useEffect(() => {
        renameWebPage('About');
    });
    return (
        <div className="h-[4000px] w-full bg-slate-200">
            <div className="sticky top-0 h-[300px] bg-pink-200">
                <h1 className="">About Page</h1>
            </div>
        </div>
    );
}

export default AboutPage;
