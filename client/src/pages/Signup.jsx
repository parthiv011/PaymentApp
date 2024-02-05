import {Heading} from "../components/ui/Heading.jsx";
import {InfoHead} from "../components/ui/InfoHead.jsx";
import {Input} from "../components/ui/Input.jsx";
import {ButtonLink} from "../components/ui/ButtonLink.jsx";
import {Button} from "../components/ui/Button.jsx";
import {Dashboard} from "./Dashboard.jsx";

export const Signup = () => {
    return <main className='h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
        <div className='rounded-lg border-black border w-80 text-center p-2 h-max px-4'>
            <Heading title={"Signup"} />
            <InfoHead label={"Sign up here to create account!"} />
            <Input label={"First Name"} placeholder={"First name"} type={"text"}/>
            <Input label={"Last Name"} placeholder={"Last name"} type={"text"}/>
            <Input label={"username"} placeholder={"email"} type={"text"}/>
            <Input label={"password"} placeholder={"password"} type={"password"}/>
            <Button title={"Sign Up"} type={"submit"} onClick={() => {}} />
            <ButtonLink mainLink={"Already have an account?"} text={"Log In"} navigator={'/login'} />
        </div>
    </div>
    </main>
}