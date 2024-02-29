import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ProfileCard} from "../components/utils/ProfileCard.jsx";
import {useRecoilValue} from "recoil";
import {userAtom} from "../store/atoms/user.jsx";

export const PayWindow = () => {
    const user = useRecoilValue(userAtom);

    return <main className='mt-24 h-screen w-full flex flex-col justify-center items-center'>
        <div className='border rounded-lg p-5 sm:w-full xl:w-1/3'>
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