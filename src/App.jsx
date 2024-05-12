import { useState } from "react";
import AddTask from "./components/addTask";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, status: false }]);
  };

  // Función para eliminar una tarea
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Función para marcar o desmarcar una tarea como completada
  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <AddTask className="addT" addTask={addTask} />

      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.status}
              onChange={() => toggleTaskStatus(index)}
            />
            <span
            >
              {task.title}
            </span>
            <button className="btnD" onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
