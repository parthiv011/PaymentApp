import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export const Navbar = () => {
    const navigate = useNavigate();

    return <nav className='relative z-10'>
        <div className='fixed top-0 w-full flex justify-between items-center bg-black bg-opacity-75 p-5 backdrop-blur-sm shadow-xl'>
        <div onClick={() => navigate('/')}
             className='cursor-pointer'
        >
            <span className='text-gray-300 text-3xl font-bold'>Payment</span>
            <span className='text-white text-3xl font-bold'>X</span>
        </div>
            <div className='flex items-center gap-x-3'>
            <button
                className='text-white hover:text-gray-300'
                onClick={() => navigate('/signup')}
            >Signup</button>
            <button
                className='text-white hover:text-gray-300'
                onClick={() => navigate('/login')}
            >Log In</button>
            </div>
        </div>
</nav>
}