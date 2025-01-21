import { configureStore } from '@reduxjs/toolkit';
import { userListReducer, authUserReducer } from './utils/authUserSlice';
import { postListReducer } from './utils/postSlices';

const authUserInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : []

const store = configureStore({
    reducer:{
      authUser: authUserReducer,
      userList: userListReducer,
      posts: postListReducer
    },
    preloadedState:{
        authUser: {
            userInfo: authUserInfoFromStorage,
          },
    }
})
export default store;