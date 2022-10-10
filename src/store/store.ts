import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { bookmarkReducer, counterReducer, myTodoReducer } from "./dataSlices";

const rootReducer = combineReducers({
  todos: myTodoReducer,
  bookmarks: bookmarkReducer,
  count: counterReducer,
});

type RootReducer = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
