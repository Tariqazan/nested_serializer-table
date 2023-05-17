import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../BaseUrl";


export const fetchCategoryList = createAsyncThunk(
    'fetch/category/list', async () => {
        return await axios
            .get(`${BASE_URL}/category/list/`)
            .then((response) => response.data)
    }
)