import { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Task = ({ task }) => {
 const { dispatch } = useContext(TaskContext);
 const [isEditing, setIsEditing] = useState(false);
 const [newDescription, setNewDescription] = useState(task.description);

 const handleEditClick = () => {
 setIsEditing(!isEditing);
 };

 const handleSaveClick = () => {
 dispatch({ type: 'EDIT_TASK', payload: { id: task.id, title: task.title, description: newDescription } });
 setIsEditing(false);
 };

 const toggleComplete = () => {
 dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id });
 };

 return (
 <li>
 <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Delete</button>
 <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
 <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
 {task.title}
 {isEditing && <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />}
 </li>
 );
};

export default Task;
