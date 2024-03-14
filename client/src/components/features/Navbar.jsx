import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { isAuthSelector } from "../../store/selectors/isAuth.jsx";

export const Navbar = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const isAuthenticated = useRecoilValueLoadable(isAuthSelector);

    useEffect(() => {
        if (isAuthenticated.state === 'hasValue') {
            setAuth(isAuthenticated.contents);
        }
    }, [isAuthenticated]);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        setAuth(false);
        navigate('/');
    }

    return (
        <nav className='relative z-10'>
            <div className='fixed top-0 w-full flex justify-between items-center bg-black bg-opacity-75 p-5 backdrop-blur-sm shadow-xl'>
                <div onClick={() => navigate('/')} className='cursor-pointer'>
                    <span className='text-gray-300 text-3xl font-bold'>Payment</span>
                    <span className='text-white text-3xl font-bold'>X</span>
                </div>
                <div className='flex items-center gap-x-3'>
                    {auth ? (
                        <button className='text-white hover:text-gray-300' onClick={handleLogOut}>Log Out</button>
                    ) : (
                        <>
                            <button className='text-white hover:text-gray-300' onClick={() => navigate('/signup')}>Signup</button>
                            <button className='text-white hover:text-gray-300' onClick={() => navigate('/login')}>Log In</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};
