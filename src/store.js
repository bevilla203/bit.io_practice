import {configureStore} from "@reduxjs/toolkit";
import usersSlice from './reducers/users';
const store = configureStore({
    reducer:{
        users: usersSlice
    }
})

export default store;