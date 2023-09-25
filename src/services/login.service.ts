import axios from "axios"


export const loginService = {
    getToken: async () => {
    return await axios.post('https://fakestoreapi.com/auth/login',{
                username: "mor_2314",
                password: "83r5^_"
            }
        ).then(res=> res)
    }
}