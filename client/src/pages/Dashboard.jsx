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
            const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
                    setUser(response.data.user);
        }
        fetchData();
    }, [filter])
    return <main className='mt-24'>
        <h1
            className='font-bold'
        >Welcome {token}!</h1>
        <Input label={"Search User"} type={"text"} placeholder={"Enter user for transaction"} onChange={(e) => {
            setFilter(e.target.value);
        }} />

        <div>
            {users.map(user => {
                <Users user={user} />
            })}
        </div>
    </main>
}