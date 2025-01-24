import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const postLists = createAsyncThunk(
    'posts/postLists',
    async (page) => {
        const response = await fetch(`/post/?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data;
    }
)

export const userPostLists = createAsyncThunk(
    'posts/postLists',
    async (_,{getState}) => {
        const state = getState();
        const token = state.authUser.userInfo.token
        const response = await fetch('/post/myposts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data;
    }
)

export const postDetailThunk = createAsyncThunk(
    'posts/postDetail',
    async (id) => {
        const response = await fetch(`/post/${id}/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json();
        return data
    }
)

export const userPostDelete = createAsyncThunk(
    'posts/postDetail',
    async (id, {getState}) => {
        const state = getState();
        const token = state.authUser.userInfo.token
        const response = await fetch(`/post/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json();
        return data
    }
)

export const postCreateThunk = createAsyncThunk(
    'posts/postCreate',
    async (form_data,{getState}) => {
        const state = getState();
        const token = state.authUser.userInfo.token;
        const response = await fetch('/post/create/',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: form_data
            
        })
        const data = await response.json();
        return data
    }
)

const postDetailSlice = createSlice({
    name: 'postDetailState',
    initialState: { loading: false, postDetailState: [], error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postDetailThunk.pending, (state) => {
                state.loading = true;
                state.postDetailState = [];
                state.error = null;
            })
            .addCase(postDetailThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.postDetailState = action.payload;
                state.error = null;
            })
            .addCase(postDetailThunk.rejected, (state, action) => {
                state.loading = false;
                state.postDetailState = [];
                state.error = action.error.message;
            })
    }
})

const postListSlice = createSlice({
    name: 'postList',
    initialState: { loading: false, postList: [], error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postLists.pending, (state) => {
                state.loading = true;
                state.postList = [];
                state.error = null;
            })
            .addCase(postLists.fulfilled, (state, action) => {
                state.loading = false;
                state.postList = action.payload;
                state.error = null;
            })
            .addCase(postLists.rejected, (state, action) => {
                state.loading = false;
                state.postList = [];
                state.error = action.error.message
            })
    }
})

export const postDetailReducer = postDetailSlice.reducer;
export const postListReducer = postListSlice.reducer;