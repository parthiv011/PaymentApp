import {useEffect, useState} from "react";
import axios from "axios";
import {Input} from "../components/ui/Input.jsx";
import {Users} from "../components/utils/Users.jsx";
import {useRecoilValue} from "recoil";
import {isAuthSelector} from "../store/selectors/isAuth.jsx";
import {userAtom} from "../store/atoms/user.jsx";
import {Balance} from "../components/utils/Balance.jsx";

export const Dashboard = () => {
    const isAuthenticated = useRecoilValue(isAuthSelector);
    const user = useRecoilValue(userAtom);

    const token = localStorage.getItem("token");
    const [users, setUser] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        if(!isAuthenticated){
            return;
        }
        const fetchData = async ()  => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
                const userData = setUser(response.data.user);
                // const name = userData.firstName;

            }catch (e) {
                console.error("Error Fetching the Data!", e);
            }
        }
        fetchData();
    }, [filter, is,token])
    return <main className='mt-24 px-3'>

        {isAuthenticated? (
            <>
                <h1 className='font-extrabold text-3xl'>Welcome, {user.firstName}</h1>
                    <hr />
                <Balance value={"3000"} />
                <Input label={"Search User"}
                       type={"text"}
                       placeholder={"Enter user for transaction"}
                       onChange={(e) => {
                           setFilter(e.target.value);
                       }} />

                <div className='flex flex-wrap'>
                    {users.map(user => (
                        <Users key={user._id} user={user} />
                    ))}
                </div>
            </>
        ) : (
            <p>Please Log In To get access to DashBoard!</p>
        )}
    </main>
}