import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (event) => {
 event.preventDefault();
 addTask(title, description);
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
