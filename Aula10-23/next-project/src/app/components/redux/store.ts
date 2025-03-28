import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "./counterSlice";
import { count } from "console";

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
    reducer: {
        count: persistedCounterReducer,
        cart: persisterCartReducer,
        users: persistedUsersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
    reducer: {
        count: persistedReducer},
    });

export const persistor = persistStore(store);
    
middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(loggerMiddleware),
});
