import {Heading} from "../components/ui/Heading.jsx";
import {InfoHead} from "../components/ui/InfoHead.jsx";
import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ButtonLink} from "../components/ui/ButtonLink.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useRecoilState, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {userAtom} from "../store/atoms/user.jsx";
import {isAuthSelector} from "../store/selectors/isAuth.jsx";
import {balanceAtom} from "../store/atoms/balance.jsx";

export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const setUser = useSetRecoilState(userAtom);
    const isAuthenticated = useRecoilValueLoadable(isAuthSelector);

    const setBalance = useSetRecoilState(balanceAtom);

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/dashboard');
        }
    }, [isAuthenticated]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                username,
                password
            });

            const token = await response.data.token;
            console.log(response);

            const getBalance =  await axios.get('http://localhost:3000/api/v1/account/balance', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setUser({
                userId: response.data.userId,
                username: response.data.username,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            });

            const v = setBalance(getBalance.data.balance);

            localStorage.setItem("token", `Bearer ${token}`);

            navigate('/dashboard');
        }
        catch (e){
            console.error(e);
        }
    }

    return <main className='h-screen flex justify-center bg-white'>
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