import { createSlice } from "@reduxjs/toolkit";

const recodeSlice = createSlice({
    name:'recodeSlice',
    initialState:[],
    reducers:{
        onCreateRecode:(state, action)=>{
            state.push(action.payload)
        },
        deleteRecode:(state,action)=>{
            state.splice(action.payload, 1);
        }
    }
});

export default recodeSlice;
export const { onCreateRecode, deleteRecode } = recodeSlice.actions;