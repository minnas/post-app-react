import { createSlice, configureStore } from '@reduxjs/toolkit'
import { MyTodo } from '../components/types/types';

const myTodoSlice = createSlice({
  name: 'myTodos',
  initialState: {
    todos: [] as MyTodo[]
  },
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload as MyTodo);
    },
    remove:(state, action) => {
      state.todos = state.todos.filter(t => t.id != action.payload.id as number);
    },
    update: (state, action) => {
      const index = state.todos.findIndex(t => t.id == (action.payload as MyTodo).id);
      if(index > -1) {
        state.todos.splice(index, 1, action.payload as MyTodo);
      }
    }
  }
})

export const { add, update, remove } = myTodoSlice.actions;

const store = configureStore({
  reducer: myTodoSlice.reducer
});

export default store;