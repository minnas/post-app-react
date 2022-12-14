import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { Bookmark, MyTodo } from "@dataTypes/types";

const myTodoSlice = createSlice({
  name: "myTodos",
  initialState: [] as MyTodo[],
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload, id: uuid() } as MyTodo);
    },
    remove: (state, action) => {
      return state.filter((t) => t.id != action.payload.id);
    },
    update: (state, action) => {
      const index = state.findIndex(
        (t) => t.id == (action.payload as MyTodo).id
      );
      if (index > -1) {
        state.splice(index, 1, action.payload as MyTodo);
      }
    },
  },
});

const myBookmarkSlice = createSlice({
  name: "myBookmarks",
  initialState: [] as Bookmark[],
  reducers: {
    addBookmark: (state, action) => {
      state.push({ ...action.payload, id: uuid() } as Bookmark);
    },
    removeBookmark: (state, action) => {
      return state.filter((t) => t.id != action.payload.id);
    },
    updateBookmark: (state, action) => {
      const index = state.findIndex(
        (t) => t.id == (action.payload as Bookmark).id
      );
      if (index > -1) {
        state.splice(index, 1, action.payload as Bookmark);
      }
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => (state = 0),
  },
});
/**reducers */
export const myTodoReducer = myTodoSlice.reducer;
export const bookmarkReducer = myBookmarkSlice.reducer;
export const counterReducer = counterSlice.reducer;
/**actions */
export const { add, update, remove } = myTodoSlice.actions;
export const { addBookmark, updateBookmark, removeBookmark } =
  myBookmarkSlice.actions;
export const { increment, decrement, reset } = counterSlice.actions;
