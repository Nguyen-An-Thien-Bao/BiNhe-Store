import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import Footer from '../../components/Footer';
import SignIn from '../../components/SignInForm';

function Login() {
    useEffect(() => {
        generalFunction('Login');
    });

    return (
        <>
            <SignIn />
            <Footer />
        </>
    );
}

export default Login;
