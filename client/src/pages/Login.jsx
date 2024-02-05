import {Heading} from "../components/ui/Heading.jsx";
import {InfoHead} from "../components/ui/InfoHead.jsx";
import {Input} from "../components/ui/Input.jsx";
import {Button} from "../components/ui/Button.jsx";
import {ButtonLink} from "../components/ui/ButtonLink.jsx";

export const Login = () => {
    return <main className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg border-black border w-80 text-center p-2 h-max px-4'>
                <Heading title={"Log In"} />
                <InfoHead label={"Log In with your Credentials here!"} />
                <Input label={"username"} placeholder={"email"} type={"text"}/>
                <Input label={"password"} placeholder={"password"} type={"password"}/>
                <Button title={"Submit"} type={"submit"} onClick={() => {}} />
                <ButtonLink mainLink={"Already have an account?"} text={"Sign Up"} navigator={'/signup'} />
            </div>
        </div>
    </main>
}