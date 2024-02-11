import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ProfileCard} from "../components/ProfileCard.jsx";

export const PayWindow = () => {

    return <main className='mt-24 h-screen w-full flex flex-col justify-center items-center'>
        <div className='border rounded-lg p-5'>
            <ProfileCard profileImage={"S"} firstName={"Chandler"} lastName={"Bing"} />
            <Input label={"Enter Amount"}
               type={"number"}
               placeholder={"Enter amount to transfer"}
               min={0}
            />
            <Button type={"submit"} title={"Send Money"} />
        </div>
    </main>
}