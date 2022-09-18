import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const CategoriesSlice = createSlice({
    name: "Categories",
    initialState,
    reducers: {
        getAllCategorie: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { getAllCategorie } = CategoriesSlice.actions

export default CategoriesSlice.reducer