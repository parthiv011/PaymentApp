import {useNavigate} from "react-router-dom";
import {SectionUI} from "../components/ui/SectionUI.jsx";
import {FooterList} from "../components/ui/FooterList.jsx";

export const Home = () => {
    const navigate = useNavigate();
    const handleSetStarted = () => {
        navigate('/login');
    }
    return <main>
        <section className='w-full h-screen mt-12 flex flex-col justify-center items-center bg-black'>
            <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">PaymentX
            </h1>
            <h2 className='text-gray-300 p-3 text-4xl'
                >Transforming Payments into a breeze!</h2>
            <button
            onClick={handleSetStarted}
            className='text-black bg-white text-base font-medium px-3 py-1 mt-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300'
            >Getting started</button>
        </section>
        <SectionUI sectionName={"Modular Solutions"}
                   mainHeading={"Experience seamless transactions and secure payments."}
                   subHeading={"Increase authorisation rates, optimise your checkout conversion and offer local payment methods in every market."}
                   image={"image1.png"}/>
        <SectionUI sectionName={"Payments"}
                   mainHeading={"Accept and optimise payments, globally."}
                   subHeading={"Increase authorisation rates, optimise your checkout conversion and offer local payment methods in every market."}
                   image={"image2.png"}/>

        <footer className='bg-black flex justify-between p-5 items-center'>
            <div>
                <span className='text-gray-300 text-3xl font-bold'>Payment</span>
                <span className='text-white text-3xl font-bold'>X</span>
            </div>
            <div>
                <FooterList list={"Github"} link={"https://github.com/parthiv011"}/>
                <FooterList list={"Linked In"} link={"https://github.com/parthiv011"}/>
                <FooterList list={"Twitter"} link={"https://github.com/parthiv011"}/>
            </div>
        </footer>
    </main>
}