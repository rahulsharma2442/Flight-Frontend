import { configureStore } from "@reduxjs/toolkit";
import { loginpageapi } from "../srv/loginpageapislice";

export const store = configureStore({
    reducer: {
        [loginpageapi.reducerPath]: loginpageapi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(loginpageapi.middleware),
});