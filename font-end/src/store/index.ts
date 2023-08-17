import { cartReducer } from "../pages/clientPages/cart/Cart.slice";
import { userAPI } from "../pages/service/user.service";
import { foodAPI } from "../pages/service/food.service";

import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoryAPI } from "../pages/service/category.service";
import { orderAPI } from "../pages/service/order.service";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  cart: cartReducer,
  [foodAPI.reducerPath]: foodAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(foodAPI.middleware, userAPI.middleware, categoryAPI.middleware, orderAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default persistStore(store);
