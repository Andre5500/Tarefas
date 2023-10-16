import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" checked={task.completed} />
          <span>{task}</span>
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
