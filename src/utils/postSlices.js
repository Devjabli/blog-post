import {creatSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const postLists = createAsyncThunk(
    'posts/postLists',
    async () => {
        const response = fetch('/api/users')
    }
)