import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { reducer as CartReducer } from "./cart/reducer";
import { reducer as userReducer } from "./user/reducer";

export const store = configureStore({
  reducer: combineReducers({
    cart: CartReducer,
    user: userReducer
  })
});


