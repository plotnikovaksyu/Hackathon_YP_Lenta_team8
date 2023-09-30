import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export default configureStore({
    reduser: {
        user: userSlice,
    }
});