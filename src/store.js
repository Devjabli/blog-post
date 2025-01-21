import { configureStore } from '@reduxjs/toolkit';
import { userListReducer, authUserReducer } from './utils/authUserSlice';

const authUserInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : []

const store = configureStore({
    reducer:{
      authUser: authUserReducer,
      userList: userListReducer
    },
    preloadedState:{
        authUser: {
            userInfo: authUserInfoFromStorage,
          },
    }
})
export default store;