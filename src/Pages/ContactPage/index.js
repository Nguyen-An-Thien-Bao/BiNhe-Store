import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';

function ContactPage() {
    useEffect(() => {
        renameWebPage('Contact');
    });
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
}

// {navConfig.map((ele, idx) => (
//     <NavItem config={ele} key={idx} />
// ))}
export default ContactPage;
