import {useEffect, useState} from "react";
import axios from "axios";
import {Input} from "../components/ui/Input.jsx";
import {Users} from "../components/Users.jsx";

export const Dashboard = () => {
    const token = localStorage.getItem("token");
    const [users, setUser] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
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
    }, [filter])
    return <main className='mt-24 px-3'>
        <h1
            className='font-bold'
        >Welcome </h1>
        <Input label={"Search User"} type={"text"} placeholder={"Enter user for transaction"} onChange={(e) => {
            setFilter(e.target.value);
        }} />

        <div className='gap-3 flex'>
            {users.map(user => (
                <Users key={user._id} user={user} />
            ))}

        </div>
    </main>
}