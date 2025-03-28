import { createSlice, createAsyncThunk, isPending } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(fetchUsers.pending,(state) => {
            state.status = "loading";
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
        })
            .addCase(fetchUsers.rejected,(state) => {
            state.status = "failed";
        })
    },
});