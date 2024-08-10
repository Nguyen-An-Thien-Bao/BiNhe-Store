import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';

function Register() {
    useEffect(() => {
        renameWebPage('Register');
    });

    return (
        <>
            <RegisterForm />
            <Footer />
        </>
    );
}

export default Register;
