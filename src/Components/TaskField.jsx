import TodoItem from "./TodoItem";
import style from './TaskField.module.css'

function TaskField({ taskList ,onDoneClick}) {
  return (
    <div className={style["text-container"]}>
      {taskList.map((task) => {
        return <TodoItem key={task.todoTask} name={task.todoTask} due={task.dueDate} onDoneClick={onDoneClick}></TodoItem>;
      })}
    </div>
  );
}

export default TaskField;
