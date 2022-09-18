import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { https } from "../../Api/Axios"

export const getInfoProfile = createAsyncThunk('profile/getInfoProfile', async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, dispatch } = thunkAPI
    try {
        const response = await https.get('/user-profile').then(res => {
            const roles = res.data.data.rouls
            // localStorage.setItem("roles", roles)
            return res.data.data
        })
        return response

    } catch (error) {
        return rejectWithValue(error.Message)
    }
})

const initialState = {
    data: {
        avatar: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        rouls: null,
        status: null
    },
    avatarPreview: null,
    Loading: false
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfileInfo: (state, action) => {
            state.Loading = true
            state.data.avatar = action.payload.avatar
            state.data.name = action.payload.name
            state.data.username = action.payload.username
            state.data.email = action.payload.email
            state.data.phone = action.payload.phone
        },
        setAvatarPreview: (state, action) => {
            state.avatarPreview = action.payload
        }

    },
    extraReducers: {
        [getInfoProfile.pending]: (state, action) => {
            state.Loading = true
        },
        [getInfoProfile.fulfilled]: (state, action) => {
            state.Loading = false
            state.data.avatar = action.payload.avatar
            state.data.name = action.payload.name
            state.data.username = action.payload.username
            state.data.email = action.payload.email
            state.data.phone = action.payload.phone
            state.data.rouls = action.payload.rouls
            state.data.status = action.payload.status
        },
        [getInfoProfile.rejected]: (state, action) => {
            state.Loading = false
        },

    }
})

export const { setProfileInfo, setAvatarPreview } = profileSlice.actions

export default profileSlice.reducer