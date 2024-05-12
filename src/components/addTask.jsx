import { useState } from "react";

function AddTask({ addTask }) {
    const [taskInput, setTaskInput] = useState("");

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (taskInput.trim() === "") {
            alert("Por favor, ingresa una tarea válida.");
            return;
        }

        const newTask = { title: taskInput, status: true };
        addTask(newTask);
        setTaskInput("");
    };



    return (
        <form id="todo-form" >
            <input
                type="text"
                placeholder="Añade una nueva tarea"
                value={taskInput}
                onChange={handleInputChange}
            />
            <button className="btnAdd" onClick={handleAddTask} type="button">
                Añadir Tarea
            </button>
        </form>
    );
}

export default AddTask;
