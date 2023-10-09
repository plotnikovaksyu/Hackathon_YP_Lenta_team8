import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorize } from '../utils/AuthApi';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const data = await authorize(username, password)
            sessionStorage.setItem('auth_token', data.auth_token)
            return data.auth_token
        }
        catch (err) {
            console.log(err);
        }
    }
)

const user = sessionStorage.getItem('auth_token');

// export const logoutUser = createAsyncThunk(
//     'auth/logoutUser',
//     async () => {
//         // await logout()
//         sessionStorage.removeItem('auth_token')
//     }
// )

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

// const initialState = user
//     ? { isLoggedIn: true, user, isLoading: false }
//     : { isLoggedIn: false, user: null, isLoading: false };

const authSlice = createSlice({
    name: 'auth',
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
        // [logoutUser.fulfilled]: (state, action) => {  // выход
        //     state.isLoggedIn = false;
        //     state.user = null;
        // },
    }

})

const { reducer } = authSlice;
export default reducer;