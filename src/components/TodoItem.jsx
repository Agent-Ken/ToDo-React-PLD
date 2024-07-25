import React from 'react';

function TodoItem({ task, index, completeTask, deleteTask }) {
  return (
    <div className={`todo ${task.completed ? 'completed' : ''}`}>
      {task.text}
      <button onClick={() => completeTask(index)}>Complete</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
