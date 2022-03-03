import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { errorResponse } from "../../helpers/errorResponse";
import { authenticate } from "../../helpers/cookie";
import { commonSuccess } from "../../helpers/successResponse";
import { removeCookie, getCookie } from "../../helpers/cookie";

const initialState = {
    userLoginLodaing: false,
    userTokens: {},
    getUserDataLoading: false,
    UserData: {},
    userPostsLoading: false,
    userPosts: [],
};

export const userLogin = createAsyncThunk(
    "user/userLogin",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/auth/login/token/",
                payload
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getUserData = createAsyncThunk(
    "user/userData",
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8000/api/donner/user/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${getCookie("access_token")}`,
                    },
                }
            );
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const getPosts = createAsyncThunk(
    "user/userPosts",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                "http://localhost:8000/api/post/foodpost/",
                {
                    headers: {
                        Authorization: `Bearer ${getCookie("access_token")}`,
                    },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {},
    extraReducers: {
        [userLogin.pending]: (state, action) => {
            state.userLoginLodaing = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.userTokens = action.payload;
            authenticate(action.payload);
            commonSuccess("User logged in successfully");
            state.userLoginLodaing = false;
        },
        [userLogin.rejected]: (state, action) => {
            state.userLoginLodaing = false;
            errorResponse(state, action);
        },
        [getUserData.pending]: (state, action) => {
            state.getUserDataLoading = true;
        },
        [getUserData.fulfilled]: (state, action) => {
            state.UserData = action.payload;
            state.getUserDataLoading = false;
        },
        [getUserData.rejected]: (state, action) => {
            state.getUserDataLoading = false;
            errorResponse(state, action);
        },
        [getPosts.pending]: (state, action) => {
            state.userPostsLoading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.userPostsLoading = false;
            state.userPosts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.userPostsLoading = false;
            if(action.payload.response.status == 401)
            removeCookie("access_token")
            errorResponse(state, action);
        },
    },
});

export default userSlice.reducer;
