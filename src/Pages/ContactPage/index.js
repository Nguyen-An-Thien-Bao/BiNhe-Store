import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';

function ContactPage() {
    useEffect(() => {
        generalFunction('Contact');
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
