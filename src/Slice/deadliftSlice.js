import { createSlice } from "@reduxjs/toolkit";
const deadliftSlice = createSlice({
    name:'deadliftSlice',
    initialState : [],
    reducers:{
        addDeadlift:(state,action)=>{
            const data = {
                date: new Date().toLocaleDateString(),
                uv : action.payload
            }  
            state.push(data)
        }
    }
});

export default deadliftSlice;
export const { addDeadlift } = deadliftSlice.actions;