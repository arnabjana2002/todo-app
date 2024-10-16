import HeadingField from "./Components/HeadingField";
import InputField from "./Components/InputField";
import TaskField from "./Components/TaskField";
import EmptyList from "./Components/EmptyList";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { todoTask: "Do Homework", dueDate: "08-10-2024" },
    { todoTask: "Buy milk", dueDate: "08-10-2024" },
    { todoTask: "Wash Cloths", dueDate: "08-10-2024" },
    { todoTask: "Eat Chips", dueDate: "08-10-2024" },
  ]);

  const addButtonHandler = (task, date) => {
    if (task === "") alert("Enter Task");
    else if (date === "") alert("Enter Date");
    else {
      let reversedDate = date.split("-").reverse().join("-");
      let newList = [...taskList, { todoTask: task, dueDate: reversedDate }];
      setTaskList(newList);
    }
  };

  const doneButtonHandler = (task, date) => {
    let newList = taskList.filter(
      (item) => item.todoTask !== task || item.dueDate !== date
    );
    setTaskList(newList);
  };

  return (
    <center className="todo-container">
      <HeadingField />
      <InputField onAddClick={addButtonHandler} />
      <EmptyList taskList={taskList} />
      <TaskField taskList={taskList} onDoneClick={doneButtonHandler} />
    </center>
  );
}

export default App;
