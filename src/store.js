import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import benchSlice from "./Slice/benchSlice";
import deadliftSlice from "./Slice/deadliftSlice";
import recodeSlice from "./Slice/recodeSlice";
import squatSlice from "./Slice/squatSlice";


const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers({
    squatData: squatSlice.reducer,
    benchData: benchSlice.reducer,
    deadliftData: deadliftSlice.reducer,
    recode: recodeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false
        })
});

export default store;