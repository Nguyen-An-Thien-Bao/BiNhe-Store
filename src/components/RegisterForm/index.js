import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { auth } from '../../configs/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputEmail = (e) => setEmail(e.target.value);
    const handleInputPassword = (e) => setPassword(e.target.value);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="lg:flex lg:h-screen">
            <div className="border-b-[1px] border-[#ededed] px-6 py-12 lg:basis-2/4 lg:border-y-0 lg:border-r-[1px] lg:border-[#ccc]">
                <h1 className="relative left-2/4 inline-block -translate-x-2/4 text-center text-[34px] font-bold after:mx-auto after:mt-8 after:block after:h-2 after:w-[65%] after:bg-black after:content-[''] lg:left-1/4 lg:top-1/4 lg:-translate-y-2/4 lg:text-[54px] lg:after:left-0 lg:after:mx-0 lg:after:mt-24 lg:after:w-2/5">
                    Register
                </h1>
            </div>
            <div className="flex flex-col items-start px-6 py-[65px] lg:basis-2/4 lg:p-40">
                <input
                    className="mb-12 h-[55px] w-full bg-[#ededed] px-8 text-2xl outline-none"
                    placeholder="Email"
                    onChange={handleInputEmail}
                />
                <input
                    className="mb-12 h-[55px] w-full bg-[#ededed] px-8 text-2xl outline-none"
                    placeholder="Password"
                    onChange={handleInputPassword}
                />
                <Button border size="lg" className="bg-black text-[14px] font-bold text-white" onClick={handleSignUp}>
                    sign up
                </Button>
                <Link to={'/'} className="mt-8 flex items-center justify-center text-2xl text-black">
                    <HiArrowNarrowLeft className="mr-6" />
                    Back Home
                </Link>
            </div>
        </div>
    );
}

export default RegisterForm;
