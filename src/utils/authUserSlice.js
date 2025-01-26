import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Handles user login by sending a POST request with email and password.
// On success, returns user data. On failure, returns an error object with status and message.

export const authUser = createAsyncThunk(
    'users/authUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await fetch('/user/users/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        // Check for HTTP error responses
        if (!response.ok) {
          const errorData = await response.json();
          return rejectWithValue({
            status: response.status,
            message: errorData?.message || 'Login failed',
          });
        }
  
        // Return user data if login is successful
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle network or unexpected errors
        return rejectWithValue({
          status: 500,
          message: 'Something went wrong. Please try again later.',
        });
      }
    }
  );

// Fetches a list of authenticated users from the server.
// Sends a GET request to retrieve the data and returns it on success.

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

// Fetches a complete list of users from the server.
// Sends a GET request and returns the list of users on success.

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

// Slice for managing the state of the user list.
// Handles loading, success, and error states for fetching the user list.

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

// Slice for managing the authentication state of users.
// Handles login, logout, and error states during user authentication.

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
                state.error = action.payload
            })
    }
})

// Export reducers for use in the Redux store
export const {logOut} = authUserSlice.actions;
export const authUserReducer = authUserSlice.reducer;
export const userListReducer = userListSlice.reducer;