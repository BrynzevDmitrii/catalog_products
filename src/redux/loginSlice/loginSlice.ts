import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:'loginSlice',
    initialState: {
        isLogin: false
    }, 
    reducers: {
        setIsLogin(state) {
            state.isLogin = !state.isLogin
    },
}
})

export const {
    setIsLogin
} = loginSlice.actions


export default loginSlice.reducer