import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 0, name : "yone"},
    {id : 1, name : "vex"},
    {id : 2, name : "jinx"}
]

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers : {

    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;  