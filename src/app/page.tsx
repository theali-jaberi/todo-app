"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import { TodoItemType } from "@/types/dataType";
import {
  addTodo,
  removeTodo,
  toggleReadTodo,
} from "@/redux/reducer/todoReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  let todoList: TodoItemType[] = useAppSelector(
    (s) => s.persistedReducers.todoList.todoList,
  );

  const [entryText, setEntryText] = useState<string>("");

  const addTodoInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => setEntryText(event.target.value);
  const addTodoBtnHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ text: entryText }));
    setEntryText("");
  };

  const removeTodoBtnHandler = (id: TodoItemType["id"]) =>
    dispatch(removeTodo({ id }));

  const toggleReadTodoHandler = (id: TodoItemType["id"]) =>
    dispatch(toggleReadTodo({ id }));

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>Todo App</h1>
        <form className={style.addSection} onSubmit={addTodoBtnHandler}>
          <input
            type={"text"}
            className={style.todoTextEntry}
            onChange={addTodoInputHandler}
            value={entryText}
          />
          <button type={"submit"} className={style.addBtn}>
            Add To-Do
          </button>
        </form>
        <div className={style.todoList}>
          {todoList.length > 0 ? (
            todoList.map((todoItem) => (
              <div key={todoItem.id} className={style.todoItem}>
                <div
                  className={`${style.checkBox} ${
                    todoItem.isRead ? style.active : ""
                  }`}
                  onClick={() => toggleReadTodoHandler(todoItem.id)}
                >
                  <span className={style.icon}>X</span>
                </div>
                <div className={style.todoText}>{todoItem.text}</div>
                <div
                  className={style.removeBtn}
                  onClick={() => removeTodoBtnHandler(todoItem.id)}
                >
                  remove
                </div>
              </div>
            ))
          ) : (
            <div className={style.emptyBox}>
              <p>There is no todo item.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
