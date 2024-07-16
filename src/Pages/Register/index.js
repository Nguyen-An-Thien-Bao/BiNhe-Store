import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';

function Register() {
    useEffect(() => {
        generalFunction('Register');
    });

    return (
        <>
            <RegisterForm />
            <Footer />
        </>
    );
}

export default Register;
