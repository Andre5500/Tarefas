import React, { useState } from "react";

const TaskApp = () => {
  // Cria um estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Cria uma função para adicionar tarefas
  const addTask = () => {
    const task = prompt("Digite uma tarefa:");

    if (task) {
      setTasks([...tasks, task]);
    }
  };

  // Renderiza a lista de tarefas
  const renderTasks = () => {
    return (
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Renderiza a aplicação
  return (
    <div>
      <button onClick={addTask}>Adicionar tarefa</button>
      {renderTasks()}
    </div>
  );
};

export default TaskApp;
