import { useEffect } from 'react';
import renameWebPage from '../../Utils/renameWebPage';
import Footer from '../../components/Footer';
import SignIn from '../../components/SignInForm';

function Login() {
    useEffect(() => {
        renameWebPage('Login');
    });

    return (
        <>
            <SignIn />
            <Footer />
        </>
    );
}

export default Login;
