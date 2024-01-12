import React, { useState } from 'react';
import { useTaskOperations } from '../hooks/useTaskOperations.js';

const TaskForm = () => {
 const { addTask } = useTaskOperations();
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (event) => {
 event.preventDefault();
 addTask({ id: Date.now(), title, description, completed: false });
 setTitle('');
 setDescription('');
 };

 return (
 <form onSubmit={handleSubmit}>
 <label htmlFor="title">Título:</label>
 <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
 <label htmlFor="description">Descripción:</label>
 <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
 <button type="submit">Agregar tarea</button>
 </form>
 );
};

export default TaskForm;
