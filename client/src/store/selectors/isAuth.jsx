import { selector } from "recoil";
import { userAtom } from "../atoms/user.jsx";

export const isAuthSelector = selector({
  key: "isUserAuthenticated",
  get: ({ get }) => {
    const user = get(userAtom);
    if (user.userId) {
      return true;
    } else {
      return false;
    }
  },
});
