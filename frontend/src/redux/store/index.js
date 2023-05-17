import { configureStore } from "@reduxjs/toolkit";
import { categoryListReducer } from "../slices/category/CategoryList";

export default configureStore({
    reducer: {
        categoryList: categoryListReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})