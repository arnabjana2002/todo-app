import { useState } from "react";
import styles from "./InputField.module.css";


function InputField({ onAddClick }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  const onTaskChange = (e) =>{
    setTaskName(e.target.value)
  }
  
  const onDateChange = (e) =>{
    setDueDate(e.target.value)
  }

  const addButtonHandler = () =>{
    onAddClick(taskName, dueDate)
    setTaskName("")
    setDueDate("")
  }

  return (
    <div className="entry">
      <div className="row myRow">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter your task"
            className={styles.myInput}
            value={taskName}
            onChange={onTaskChange}
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            className={styles.myInput}
            value={dueDate}
            onChange={onDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger myBtn"
            onClick={addButtonHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
