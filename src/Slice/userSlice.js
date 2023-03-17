import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState:[],
    reducers:{
        CreateUser:(state,action)=> {
            state.push(action.payload)
        }
    }
});

export const {CreateUser} = userSlice.actions;
export default userSlice;