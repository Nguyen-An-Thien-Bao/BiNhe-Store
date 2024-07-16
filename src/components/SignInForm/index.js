import { useRef, useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { auth } from '../../configs/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { HiEye } from 'react-icons/hi2';

function SignIn() {
    const [hidden, setHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loginError = useRef();

    const handleInputEmail = (e) => setEmail(e.target.value);
    const handleInputPassword = (e) => setPassword(e.target.value);

    const handleShowPassword = () => {
        setHidden((prev) => !prev);
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                console.log(auth.currentUser);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                switch (errorCode) {
                    case 'auth/invalid-email':
                        loginError.current.innerText = 'Invalid email';
                        break;
                    case 'auth/invalid-credential':
                        loginError.current.innerText = 'Wrong email or password';
                        break;
                    default:
                        console.log(errorCode, errorMessage);
                }
                // loginError.current.innerText = errorCode;
                console.log([loginError]);
            });
        setEmail(() => '');
        setPassword(() => '');
    };

    return (
        <div className="lg:flex lg:h-screen">
            <div className="border-b-[1px] border-[#ededed] px-6 py-12 lg:basis-2/4 lg:border-y-0 lg:border-r-[1px] lg:border-[#ccc]">
                <h1 className="relative left-2/4 inline-block -translate-x-2/4 text-center text-[34px] font-bold after:mx-auto after:mt-8 after:block after:h-2 after:w-[65%] after:bg-black after:content-[''] lg:left-1/4 lg:top-1/4 lg:-translate-y-2/4 lg:text-[54px] lg:after:left-0 lg:after:mx-0 lg:after:mt-24 lg:after:w-2/5">
                    Login
                </h1>
            </div>
            <div className="flex flex-col items-start px-6 py-[65px] lg:basis-2/4 lg:p-40">
                <input
                    className="mb-12 h-[55px] w-full bg-[#ededed] px-8 text-2xl outline-none"
                    placeholder="Email"
                    onChange={handleInputEmail}
                />
                <div className="relative w-full">
                    <input
                        className="mb-12 h-[55px] w-full bg-[#ededed] px-8 text-2xl outline-none"
                        placeholder="Password"
                        type={hidden ? 'password' : 'text'}
                        onChange={handleInputPassword}
                    />
                    <button
                        className="absolute right-4 top-1/4 text-2xl transition-opacity hover:opacity-60"
                        onClick={handleShowPassword}
                    >
                        <HiEye />
                    </button>
                </div>

                <p className="mb-12 text-2xl text-red-600" ref={loginError}></p>
                <div>
                    <Button
                        border
                        size="lg"
                        className="bg-black text-[14px] font-bold text-white"
                        onClick={handleSignIn}
                    >
                        Login
                    </Button>
                    <span className="ml-4 text-xl text-[#5e5e5e]">
                        Don't have account?, let's
                        <Link to={'/account/register'} className="text-black">
                            {' '}
                            Register{' '}
                        </Link>
                        it!
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
