import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorize } from '../utils/AuthApi';

const user = JSON.parse(localStorage.getItem('user'));

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ username, password }) => {
        try {
            const data = await authorize(username, password)
            return { user: data };
            // console.log(user)
        }
        catch (err) {
            console.log(err);
            console.log(username, password)
        }
    }
)

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

// const initialState = user
//     ? { isLoggedIn: true, user, isLoading: false }
//     : { isLoggedIn: false, user: null, isLoading: false };

const authSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        // [loginUser.pending]: (state, action) => { // во время загрузки крутим прелоуд
        //     // state.isLoading = true,
        //     // state.error - null,
        // },
        [loginUser.fulfilled]: (state, action) => {  // если ответ ок и данные получены
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [loginUser.rejected]: (state, action) => { // если ошибка
            state.isLoggedIn = false;
            state.user = null;
        },
    }

})

const { reducer } = authSlice;
export default reducer;