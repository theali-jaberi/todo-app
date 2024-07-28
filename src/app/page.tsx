import Image from "next/image";
import style from "./style.module.scss";
import { TodoItemType } from "@/types/dataType";

export default function Home() {
  let todoList: TodoItemType[] = [];

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.addSection}>
          <input type={"text"} className={style.todoTextEntry} />
          <button type={"button"} className={style.addBtn} />
        </div>
        <div className={style.todoList}>
          {todoList.map((todoItem) => (
            <div key={todoItem.id} className={style.todoItem}>
				<div className={style.checkBox}>
					
				</div>
			</div>
          ))}
        </div>
      </div>
    </div>
  );
}
