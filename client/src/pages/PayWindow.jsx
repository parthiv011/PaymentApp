import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ProfileCard} from "../components/features/ProfileCard.jsx";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useSetRecoilState} from "recoil";
import {balanceAtom} from "../store/atoms/balance.jsx";
import {Heading} from "../components/ui/Heading.jsx";

export const PayWindow = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const name = searchParams.get("name");

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [amount, setAmount] = useState(0);
    const setBalance = useSetRecoilState(balanceAtom);

    const handleTransfer = async () => {
        const token = localStorage.getItem("token");
        try{
            const response = await axios.post('http://localhost:3000/api/v1/account/transfer', {
                to: userId,
                amount:amount
            }, {
                headers: {
                    Authorization: `${token}`
                }
            })

            setBalance((currBalance) => currBalance - amount);
            setSuccess(response.data.msg);
            setAmount(0);
        }
        catch (e) {
            console.error("Error Occurred in Transaction", e);
            setError("Error occurred in transaction. Try again later!");
        }
    }

    return <main className='mt-24 h-screen w-full flex flex-col justify-center items-center bg-white'>
        <div className='border rounded-lg p-5 sm:w-full xl:w-1/3'>
            <ProfileCard profileImage={name[0].toUpperCase()} firstName={name} lastName={""} />
            <Input label={"Enter Amount"}
               type={"number"}
               placeholder={"Enter amount to transfer"}
               min={0}
                   onChange={(e) => {
                       setAmount(e.target.value);
                   }}
            />
            <Button type={"submit"} title={"Send Money"} onClick={handleTransfer} />
            {error && <p className="text-red-500">{error}</p>}
            <Heading title={success} />
        </div>
    </main>
}