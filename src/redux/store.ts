"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import todoReducer from "@/redux/reducer/todoReducer";

const forPersistReducers = combineReducers({
  todoList: todoReducer,
});

const persistedReducers = persistReducer(
  {
    key: "root",
    storage,
  },
  forPersistReducers,
);

const store = configureStore({
  reducer: {
    persistedReducers,
  },
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
