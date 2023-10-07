import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authorize } from '../utils/AuthApi';

const user = JSON.parse(localStorage.getItem('user'));

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }) => {
        try {
            const data = await authorize(email, password) //тут api;
            return { user: data };
        }
        catch (err) {
            console.log(err);
        }
    }
)

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: 'user',
    // initialState: {
    //     user: [],
    //     status: null,
    //     error: null,
    // },
    initialState,
    extraReducers: {
        // [loginUser.pending]: (state, action) => { // во время загрузки крутим прелоуд
        //     // state.status = 'loading',
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