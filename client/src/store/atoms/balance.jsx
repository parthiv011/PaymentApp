import { atom, selector } from "recoil";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL;

export const balanceAtom = atom({
  key: "balanceAtom",
  default: selector({
    key: "getBalance",
    get: async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return 0;
      }
      try {
        const response = await axios.get(`${BACKEND_URL}account/balance`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.balance;
      } catch (e) {
        localStorage.removeItem("token");
      }
      return 0;
    },
  }),
});
