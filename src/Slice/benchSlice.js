import { createSlice } from "@reduxjs/toolkit";
const benchSlice = createSlice({
    name:'benchSlice',
    initialState : [],
    reducers:{
        addBench:(state,action)=>{
            const data = {
                date: new Date().toLocaleDateString(),
                uv : action.payload
            }  
            state.push(data)
        }
    }
});

export default benchSlice;
export const { addBench } = benchSlice.actions;