import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../components/ui/Input.jsx";
import { Users } from "../components/features/Users.jsx";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { isAuthSelector } from "../store/selectors/isAuth.jsx";
import { userAtom } from "../store/atoms/user.jsx";
import { Balance } from "../components/features/Balance.jsx";
import { balanceAtom } from "../store/atoms/balance.jsx";

export const Dashboard = () => {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const balance = useRecoilValue(balanceAtom);
  const isAuthenticated = useRecoilValueLoadable(isAuthSelector);
  const [currUser, setCurrentUser] = useRecoilState(userAtom);

  const token = localStorage.getItem("token");
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isAuthenticated) return;
        const response = await axios.get(
          `${BACKEND_URL}user/bulk?filter=${filter}`
        );
        setUser(response.data.user);
      } catch (e) {
        console.error("Error Fetching the Data!", e);
      }
    };
    fetchData();
  }, [filter, isAuthenticated, currUser]);
  return (
    <main className="mt-24 px-3 bg-white min-h-screen">
      {isAuthenticated.state === "hasValue" && isAuthenticated.contents ? (
        <>
          <h1 className="font-extrabold text-3xl">
            Welcome, {currUser.firstName}
          </h1>
          <hr />
          <Balance value={balance.toFixed(2)} />
          <Input
            label={"Search User"}
            type={"text"}
            placeholder={"Enter user for transaction"}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />

          <div className="flex flex-wrap">
            {users.map((user) => (
              <Users key={user._id} user={user} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-black">Please Log In To get access to DashBoard!</p>
      )}
    </main>
  );
};
