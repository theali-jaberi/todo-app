import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddTodoPayloadType,
  RemoveTodoPayloadType,
  TodoSliceInitialValueType,
  ToggleReadTodoPayloadType,
} from "@/types/redux/todoSlice";

const initialState: TodoSliceInitialValueType = {
  createdId: 0,
  todoList: [],
};

const userSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (
      state: TodoSliceInitialValueType,
      action: PayloadAction<AddTodoPayloadType>,
    ) => {
      state.todoList.push({
        id: ++state.createdId,
        text: action.payload.text,
        isRead: false,
      });
    },
    removeTodo: (
      state: TodoSliceInitialValueType,
      action: PayloadAction<RemoveTodoPayloadType>,
    ) => {
      state.todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id,
      );
    },
    toggleReadTodo: (
      state: TodoSliceInitialValueType,
      action: PayloadAction<ToggleReadTodoPayloadType>,
    ) => {
      const index = state.todoList.findIndex(
        (todoItem) => todoItem.id === action.payload.id,
      );
      state.todoList[index].isRead = !state.todoList[index].isRead;
    },
  },
});

export default userSlice.reducer;

export const { addTodo, removeTodo, toggleReadTodo } = userSlice.actions;
