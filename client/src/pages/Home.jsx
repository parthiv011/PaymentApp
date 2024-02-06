import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const handleSetStarted = () => {
        navigate('/login');
    }
    return <main className='w-full h-screen mt-12 flex flex-col justify-center items-center bg-black'>
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">PaymentX
        </h1>
        <h2 className='text-gray-300 p-3 text-4xl'
        >Transforming Payments into a breeze!</h2>
        <button
            onClick={handleSetStarted}
            className='text-black bg-white text-base font-medium px-3 py-1 mt-4 rounded-lg'
        >Getting started</button>
    </main>
}