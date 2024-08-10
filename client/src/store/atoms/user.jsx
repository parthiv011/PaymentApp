import { atom } from "recoil";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL;

export const userAtom = atom({
  key: "userAtom",
  default: {
    userId: "",
    username: "",
    firstName: "",
    lastName: "",
  },
  get: async () => {
    const user = {
      userId: "",
      username: "",
      firstName: "",
      lastName: "",
    };

    const token = localStorage.getItem("token");

    if (!token) {
      return user;
    }

    try {
      const getUserDetails = await axios.get(`${BACKEND_URL}user/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      user.userId = getUserDetails.data.userId;
      user.username = getUserDetails.data.username;
      user.firstName = getUserDetails.data.firstName;
      user.lastName = getUserDetails.data.lastName;
    } catch (e) {
      console.error("Error Fetching userDetails", e);
      localStorage.removeItem("token");
    }
    return user;
  },
});
