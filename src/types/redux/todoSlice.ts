import { TodoItemType } from "@/types/dataType";

export interface TodoSliceInitialValueType {
  createdId: number;
  todoList: TodoItemType[];
}

export interface AddTodoPayloadType {
  text: string;
}

export interface RemoveTodoPayloadType {
  id: number;
}

export interface ToggleReadTodoPayloadType {
  id: number;
}
