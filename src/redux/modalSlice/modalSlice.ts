import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
      isActiveModal: false
    } ,
    reducers: {
        setActiveModal(state) {
            state.isActiveModal = !state.isActiveModal
    },
}
})
export const {
    setActiveModal
} = modalSlice.actions

export default modalSlice.reducer