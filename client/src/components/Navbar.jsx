import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return <nav className='relative'>
        <div className='fixed top-0 w-full flex justify-between items-center bg-black p-5'>
        <div onClick={() => navigate('/')}>
            <span className='text-gray-300 text-3xl font-bold'>Payment</span>
            <span className='text-white text-3xl font-bold'>X</span>
        </div>
            <div className='flex items-center gap-x-3'>
            <button
                className='text-white'
                onClick={() => navigate('/signup')}
            >Signup</button>
            <button
                className='text-white'
                onClick={() => navigate('/login')}
            >Log In</button>
            </div>
        </div>
</nav>
}