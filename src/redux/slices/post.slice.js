import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorResponse } from "../../helpers/errorResponse";
import { commonSuccess, SuccessResponse } from "../../helpers/successResponse";
import axios from "../../config/axios";

const initialState = {
    createPostLoading: false,
    createPostData: {},
};

export const createPost = createAsyncThunk(
    "post/createPost",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/post/foodpost/",
                payload
            );
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const postSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {},
    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.createPostLoading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.createPostLoading = false;
            console.log("Hello");
            state.createPostData = action.payload;

            //SuccessResponse(state,action)
            commonSuccess("Food Post Created");
        },
        [createPost.rejected]: (state, action) => {
            state.createPostLoading = false;
            errorResponse(state, action);
        },
    },
});

export default postSlice.reducer;
