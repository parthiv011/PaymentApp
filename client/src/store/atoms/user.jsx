import {atom} from "recoil";
import axios from "axios";

export const userAtom = atom({
    key: 'userAtom',
    default: {
        userId: '',
        firstName: '',
        lastName: '',
        username: '',
    },
    get: async () => {
        const user = {
            userId: '',
            firstName: '',
            lastName: '',
            username:''
        }

        const token = localStorage.getItem("token");

        if(!token){
            return user;
        }

        try{
            const getUserDetails = await axios.get('http://localhost:3000/api/v1/user/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            user.userId = getUserDetails.data.userId;
            user.username = getUserDetails.data.username;
            user.firstName = getUserDetails.data.firstName;
            user.lastName = getUserDetails.data.lastName;
        }
        catch (e) {
            console.error("Error Fetching userDetails" ,e);
            localStorage.removeItem("token");
        }
        return user;
    }
})