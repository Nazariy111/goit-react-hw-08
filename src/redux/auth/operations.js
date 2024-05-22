import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => { 
    try {
        const response = await axios.post("/users/signup", newUser);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => { 
    try {
        const response = await axios.post("/users/login", userInfo);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk("auth/logout", async () => { });