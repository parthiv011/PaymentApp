import {Heading} from "../components/ui/Heading.jsx";
import {InfoHead} from "../components/ui/InfoHead.jsx";
import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ButtonLink} from "../components/ui/ButtonLink.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                username,
                password
            });

            localStorage.setItem("token", `Bearer ${response.data.token}`);
            navigate('/dashboard');
        }
        catch (e){
            console.error(e);
        }
    }

    return <main className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <form onSubmit={handleLogin}
                className='rounded-lg border-black border w-80 text-center p-2 h-max px-4'>
                <Heading title={"Log In"} />
                <InfoHead label={"Log In with your Credentials here!"} />
                <Input label={"username"} placeholder={"email"} type={"text"}
                onChange={e => setUsername(e.target.value)}
                />
                <Input label={"password"} placeholder={"password"} type={"password"}
                onChange={e => setPassword(e.target.value)}
                />
                <Button title={"Submit"} type={"submit"} />
                <ButtonLink mainLink={"Don't have an account?"} text={"Sign Up"} navigator={'/signup'} />
            </form>
        </div>
    </main>
}