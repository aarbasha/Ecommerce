import { configureStore } from '@reduxjs/toolkit'
import authSlice from './JWT/authSlice'
import CategoriesSlice from "./JWT/CategoriesSlice"
import profileSlice from './JWT/profileSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        categorie: CategoriesSlice,
        profile: profileSlice
    },
})
