//create toDoAdd with cars

import { useState } from "react";
import './toDoAdd.css';


export default function ToDoAdd() {
  const [tasks, setTasks] = useState([]); // Список задач
  const [input, setInput] = useState(""); // Текст в инпуте

  // Функция добавления задачи
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]); // Добавляем новую задачу в массив
      setInput(""); // Очищаем поле ввода
    }
  };

  // Функция удаления задачи
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>Enter the car number</h2>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task..."
        />
        <button class="buttonToDo" onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="buttonToDo" onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
