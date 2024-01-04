import React from 'react';

const Task = ({ id, name, completed, onToggleComplete }) => {
  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
      <input type="checkbox" checked={completed} onChange={() => onToggleComplete(id)} />
    </div>
  );
};

export default Task;