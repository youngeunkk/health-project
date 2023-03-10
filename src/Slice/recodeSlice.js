import { createSlice } from "@reduxjs/toolkit";

const recodeSlice = createSlice({
    name:'recodeSlice',
    initialState:[],
    reducers:{
        CreateRecode:(state, action)=>{
            state.push(action.payload)
        },
        deleteRecode:(state,action)=>{
            const recodeIndex = state.findIndex((recode)=> recode.id === action.payload);
            if (recodeIndex !== -1) {
                state.splice(recodeIndex, 1);
            }
        },
        UpdateRecode:(state, action)=> {
            const {id, date, body} = action.payload
            const recodeIndex = state.findIndex(recode=>recode.id === id)
            state[recodeIndex] = {id, date, body};
        }
    }
});
export const { CreateRecode, deleteRecode, UpdateRecode } = recodeSlice.actions;
export default recodeSlice;