import { configureStore } from "@reduxjs/toolkit";
import benchSlice from "./Slice/benchSlice";
import deadliftSlice from "./Slice/deadliftSlice";
import squatSlice from "./Slice/squatSlice";




const store = configureStore({
    reducer: { 
        squatData:squatSlice.reducer,
        benchData:benchSlice.reducer,
        deadliftData:deadliftSlice.reducer
    }
}); 

export default store;