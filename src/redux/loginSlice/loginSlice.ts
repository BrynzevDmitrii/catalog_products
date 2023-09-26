import { createSlice } from "@reduxjs/toolkit";
import { useGetCookie } from "../../hook/useGetCookie";


const loginSlice = createSlice({
    name:'loginSlice',
    initialState: {
        isLogin: false,
        isAuth: false
    }, 
    reducers: {
        setIsLogin(state) {
            state.isLogin = !state.isLogin
    },
        setIsAuth(state) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isAuth = useGetCookie('token')
            if(isAuth){
                state.isAuth = true
            }
            return
        }
}
})

export const {
    setIsLogin,
    setIsAuth
} = loginSlice.actions


export default loginSlice.reducer