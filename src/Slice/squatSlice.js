import { createSlice } from "@reduxjs/toolkit";
const squatSlice = createSlice({
    name:'squatSlice',
    initialState : [],
    reducers:{
        addSquat:(state,action)=>{

            const data = {
                date: new Date().toLocaleDateString(),
                uv : action.payload
            }  
            state.push(data)
        }
    }
});

export default squatSlice;
export const { addSquat } = squatSlice.actions;