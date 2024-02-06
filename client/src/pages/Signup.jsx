import {Heading} from "../components/ui/Heading.jsx";
import {InfoHead} from "../components/ui/InfoHead.jsx";
import {Input} from "../components/ui/Input.jsx";
import {ButtonLink} from "../components/ui/ButtonLink.jsx";
import {Button} from "../components/ui/Button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Signup = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
            username,
            password,
            firstName,
            lastName
        })

        localStorage.setItem("token", `Bearer ${response.data.token}`);
        navigate('/dashboard');
    }

    return <main className='h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
        <form onSubmit={handleSignUp}
            className='rounded-lg border-black border w-80 text-center p-2 h-max px-4'>
            <Heading title={"Signup"} />
            <InfoHead label={"Sign up here to create account!"} />
            <Input label={"First Name"} placeholder={"First name"} type={"text"}
                    onChange={e => setFirstName(e.target.value)}
            />
            <Input label={"Last Name"} placeholder={"Last name"} type={"text"}
                   onChange={e => setLastName(e.target.value)}
            />
            <Input label={"username"} placeholder={"email"} type={"text"}
                   onChange={e => setUsername(e.target.value)}
            />
            <Input label={"password"} placeholder={"password"} type={"password"}
                   onChange={e => setPassword(e.target.value)}
            />
            <Button title={"Sign Up"} type={"submit"} />
            <ButtonLink mainLink={"Already have an account?"} text={"Log In"} navigator={'/login'} />
        </form>
    </div>
    </main>
}