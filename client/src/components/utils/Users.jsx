import {Button} from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import {ProfileCard} from "./ProfileCard.jsx";

export const Users = ({user}) => {

    const navigate = useNavigate();

    return <div className="flex flex-col justify-between border p-2 mt-2 rounded-xl sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
        <ProfileCard profileImage={user.firstName[0]} firstName={user.firstName} lastName={user.lastName} />
        <div className='flex gap-2 mt-4'>
            <Button title={"Request"} />
            <Button title={"Pay"} onClick={() => {
                navigate(`/transfer?id=user._id`);
            }}/>
        </div>
    </div>
}