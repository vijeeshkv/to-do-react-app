import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./component/todos/reducers"; // ✅ Ensure correct reducer import
import { thunk } from "redux-thunk"; // ✅ Middleware support for async actions

// Combine reducers
const rootReducer = combineReducers({
    todos, // ✅ Keep key name same as reducer function
});

// Redux Persist Configuration
const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
  };
  
  // Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  // Create Store with Middleware
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk),
    devTools: process.env.NODE_ENV !== "production",
  });
  
  // Create Persistor
  export const persistor = persistStore(store);
  export default store;