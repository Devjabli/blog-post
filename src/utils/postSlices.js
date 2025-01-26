import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


// Fetches a list of posts based on the given page number.
// Sends a GET request and returns the list of posts on success.
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


// Fetches the list of posts created by the authenticated user.
// Sends a GET request with the user's token for authentication.
export const userPostListsApi = createAsyncThunk(
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

// Fetches detailed information for a specific post based on its ID.
// Sends a GET request and returns the post details on success.
export const postDetailApi = createAsyncThunk(
    'posts/postDetailApi',
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


// Deletes a specific post by its ID.
// Includes the user's token in the Authorization header for authentication.
// Sends a DELETE request to the server and returns the response.
export const userPostDeleteApi = createAsyncThunk(
    'posts/postDelete',
    async (id, {getState}) => {
        const state = getState();
        const token = state.authUser.userInfo.token
        const response = await fetch(`/post/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json();
        return data
    }
)

// Creates a new post using the provided form data.
// Includes the user's token in the Authorization header for authentication.
// Sends a POST request to the server and returns the created post data.
export const postCreateAPi = createAsyncThunk(
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

// Updates an existing post by its ID using the provided form data.
// Includes the user's token in the Authorization header for authentication.
// Sends a PUT request to the server and returns the updated post data.
export const postUpdateApi = createAsyncThunk(
    'posts/postUpdate',
    async ({postId, form_data},{getState}) => {
        const state = getState();
        const token = state.authUser.userInfo.token;
        const response = await fetch(`/post/${postId}/update/`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: form_data
            
        })
        const data = await response.json();
        return data
    }
)

// Slice for managing the state of a specific post's details.
// Handles loading, success, and error states for fetching post details.
const postDetailSlice = createSlice({
    name: 'postDetailState',
    initialState: { loading: false, postDetailState: [], error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postDetailApi.pending, (state) => {
                state.loading = true;
                state.postDetailState = [];
                state.error = null;
            })
            .addCase(postDetailApi.fulfilled, (state, action) => {
                state.loading = false;
                state.postDetailState = action.payload;
                state.error = null;
            })
            .addCase(postDetailApi.rejected, (state, action) => {
                state.loading = false;
                state.postDetailState = [];
                state.error = action.error.message;
            })
    }
})

// Slice for managing the state of the post list.
// Handles loading, success, and error states for fetching a list of posts.
const postListSlice = createSlice({
    name: 'postList',
    initialState: { loading: false, postList: [], error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userPostListsApi.pending, (state) => {
                state.loading = true;
                state.postList = [];
                state.error = null;
            })
            .addCase(userPostListsApi.fulfilled, (state, action) => {
                state.loading = false;
                state.postList = action.payload;
                state.error = null;
            })
            .addCase(userPostListsApi.rejected, (state, action) => {
                state.loading = false;
                state.postList = [];
                state.error = action.error.message
            })
    }
})


// Exports the reducers for managing post details and post lists.
export const postDetailReducer = postDetailSlice.reducer;
export const postListReducer = postListSlice.reducer;