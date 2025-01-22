import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const postLists = createAsyncThunk(
    'posts/postLists',
    async () => {
        const response = await fetch('/post/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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