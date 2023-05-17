import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList } from "./Service";

export const initialState = {
    loading: false,
    data: [],
    error: ''
}

const categoryListSlice = createSlice({
    name: "categoryList",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchCategoryList.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        });
    },
});



export const categoryListReducer = categoryListSlice.reducer