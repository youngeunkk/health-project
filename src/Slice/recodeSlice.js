import { createSlice } from "@reduxjs/toolkit";

const recodeSlice = createSlice({
    name:'recodeSlice',
    initialState:[],
    reducers:{
        onCreateRecode:(state, action)=>{
            state.push(action.payload)
        }
    }
});

export default recodeSlice;
export const { onCreateRecode } = recodeSlice.actions;