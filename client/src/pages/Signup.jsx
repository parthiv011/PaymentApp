import { Heading } from "../components/ui/Heading.jsx";
import { InfoHead } from "../components/ui/InfoHead.jsx";
import { Input } from "../components/ui/Input.jsx";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { Button } from "../components/ui/Button.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user.jsx";
import { isAuthSelector } from "../store/selectors/isAuth.jsx";
import { balanceAtom } from "../store/atoms/balance.jsx";

export const Signup = () => {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setUser = useSetRecoilState(userAtom);
  const isAuthenticated = useRecoilValueLoadable(isAuthSelector);
  const setBalance = useSetRecoilState(balanceAtom);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const response = await axios.post(`${BACKEND_URL}user/signup`, {
      username,
      password,
      firstName,
      lastName,
    });
    const token = await response.data.token;
    const getBalance = await axios.get(`${BACKEND_URL}account/balance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser({
      userId: response.data.userId,
      username: response.data.username,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
    });

    setBalance(getBalance.data.balance);

    localStorage.setItem("token", `Bearer ${response.data.token}`);
    navigate("/dashboard");
  };

  return (
    <main className="h-screen flex justify-center bg-white">
      <div className="flex flex-col justify-center">
        <form
          onSubmit={handleSignUp}
          className="rounded-lg border-black border w-80 text-center p-2 h-max px-4"
        >
          <Heading title={"Signup"} />
          <InfoHead label={"Sign up here to create account!"} />
          <Input
            label={"First Name"}
            placeholder={"First name"}
            type={"text"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label={"Last Name"}
            placeholder={"Last name"}
            type={"text"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            label={"username"}
            placeholder={"email"}
            type={"text"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label={"password"}
            placeholder={"password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title={"Sign Up"} type={"submit"} />
          <ButtonLink
            mainLink={"Already have an account?"}
            text={"Log In"}
            navigator={"/login"}
          />
        </form>
      </div>
    </main>
  );
};
