import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import postReducer from "./slices/post.slice";

export default configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
    },
});
