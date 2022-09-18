import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { https } from "../../Api/Axios"
import { getInfoProfile } from "./profileSlice"

export const AuthLogin = createAsyncThunk('auth/AuthLogin', async (inputs, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, dispatch } = thunkAPI
    try {
        const response = await https.post('/login', inputs).then(res => {
            const token = res.data.data.original.access_token
            const roles = res.data.data.original.user.roles
            localStorage.setItem('token', token)
            // localStorage.setItem("roles", roles)
            return res.data
        })
        return response
    } catch (error) {
        return rejectWithValue(error.Message)
    }

})
export const AuthSingUp = createAsyncThunk("auth/AuthSingUp", async (data, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI
    try {
        const response = await https.post('/register', data).then(res => {
            return res, data
        })
        return response
    } catch (error) {
        return rejectWithValue(error.massage)
    }
})

const initialState = {
    token: null,
    data: {
        name: '',
        username: '',
        email: '',
        phone: '',
        avatar: '',
        rouls: null,
        status: null
    },
    avatarPreview: null,
    Loading: false,
    error: null,
    success: null,
    status: null,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [AuthLogin.pending]: (state, action) => {
            console.log(action);
            state.Loading = true
        },
        [AuthLogin.fulfilled]: (state, action) => {
            console.log(action);
            state.Loading = false
            state.status = action.payload.status
            state.token = action.payload.data.original.access_token
            state.data.name = action.payload.data.original.user.name
            state.data.username = action.payload.data.original.user.username
            state.data.email = action.payload.data.original.user.email
            state.data.phone = action.payload.data.original.user.phone
            state.data.avatar = action.payload.data.original.user.avatar
            state.data.rouls = action.payload.data.original.user.rouls
            state.data.status = action.payload.data.original.user.status
        },
        [AuthLogin.rejected]: (state, action) => {
            console.log(action);
            state.Loading = false
            state.error = action.payload
        },
        // singup
        [AuthSingUp.pending]: (state, action) => {
            state.Loading = true
        },
        [AuthSingUp.fulfilled]: (state, action) => {
            console.log(action);
            state.error = action.payload.Massage
            state.success = action.payload.Massage
            state.status = action.payload.status
            state.data.name = action.payload.data.name
            state.data.username = action.payload.data.username
            state.data.email = action.payload.data.email
            state.data.phone = action.payload.data.phone
            state.data.avatar = action.payload.data.avatar
            state.Loading = false
        },
        [AuthSingUp.rejected]: (state, action) => {
            console.log(action);
            state.error = action.payload.Massage
            state.status = action.payload.status
            state.Loading = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { setAuthInfo, setToken } = authSlice.actions

export default authSlice.reducer