import React, { useState } from 'react';

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
 const [isEditing, setIsEditing] = useState(false);
 const [newDescription, setNewDescription] = useState(task.description);

 const handleEditClick = () => {
 setIsEditing(!isEditing);
 };

 const handleSaveClick = () => {
 editTask(task.id, task.title, newDescription);
 setIsEditing(false);
 };

 return (
 <li>
 <button onClick={() => deleteTask(task.id)}>Delete</button>
 <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
 <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
 {task.title}
 {isEditing && <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />}
 </li>
 );
};

export default Task;
