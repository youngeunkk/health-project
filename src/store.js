import { configureStore } from "@reduxjs/toolkit";
import benchSlice from "./Slice/benchSlice";
import deadliftSlice from "./Slice/deadliftSlice";
import recodeSlice from "./Slice/recodeSlice";
import squatSlice from "./Slice/squatSlice";




const store = configureStore({
    reducer: { 
        squatData:squatSlice.reducer,
        benchData:benchSlice.reducer,
        deadliftData:deadliftSlice.reducer,
        recode:recodeSlice.reducer
    }
}); 

export default store;