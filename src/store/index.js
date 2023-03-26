import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer, categoryReducer, productReducer } from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import placeReducer from "./place.slice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    place: placeReducer,
    category: categoryReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default createStore(applyMiddleware(thunk));
