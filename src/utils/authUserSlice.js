import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
    'users/authUser',
    async ({email, password}) => {
        const response = await fetch('/user/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const data = await response.json()
        return data;
    }
);

export const authUserList = createAsyncThunk(
    'users/authUserList',
    async (_,) => {
        const response = await fetch('/user/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data;
    }
)

export const authUserRegister = createAsyncThunk(
    'users/authUserRegister',
    async ({
        first_name,
        last_name,
        email,
        password
    }) => {
        const response = await fetch('/user/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        })
        const data = await response.json()
        return data
    }
)

export const usersList = createAsyncThunk(
    'users/usersList',
    async () => {
        const response = await fetch('/user/users/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
)

const userListSlice = createSlice({
    name: 'userList',
    initialState: { loading: false, userList: [], error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authUserList.pending, (state) => {
                state.loading = true;
                state.userList = [];
                state.error = null;
            })
            .addCase(authUserList.fulfilled, (state, action) => {
                state.loading = false;
                state.userList = action.payload;
                state.error = null;
            })
            .addCase(authUserList.rejected, (state, action) => {
                state.loading = false;
                state.userList = [];
                state.error = action.error.message
            })
    }
})

const authUserSlice = createSlice({
    name: 'userInfo',
    initialState: { loading: false, userInfo: [], error: null},
    reducers: {
        logOut: (state) => {
            state.userInfo = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.userInfo = [];
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                state.error = null;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.userInfo = [];
                state.error = action.error.message
            })
    }
})


export const {logOut} = authUserSlice.actions;
export const authUserReducer = authUserSlice.reducer;
export const userListReducer = userListSlice.reducer;