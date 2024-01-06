import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
 const [tasks, setTasks] = useState([
 { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', completed: false },
 { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', completed: true },
 { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', completed: false },
 ]);

 useEffect(() => {
 const savedTasks = JSON.parse(localStorage.getItem('tasks'));
 if (savedTasks) {
 setTasks(savedTasks);
 }
 }, []);

 const addTask = (title, description) => {
 const newTask = { id: Date.now(), title, description, completed: false };
 setTasks([...tasks, newTask]);
 localStorage.setItem('tasks', JSON.stringify(tasks));
 };

 const toggleComplete = (id) => {
 const newTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
 setTasks(newTasks);
 localStorage.setItem('tasks', JSON.stringify(newTasks));
 };

 const deleteTask = (id) => {
 const newTasks = tasks.filter((task) => task.id !== id);
 setTasks(newTasks);
 localStorage.setItem('tasks', JSON.stringify(newTasks));
 };

 const editTask = (id, title, description) => {
 const newTasks = tasks.map((task) => task.id === id ? { ...task, title, description } : task);
 setTasks(newTasks);
 localStorage.setItem('tasks', JSON.stringify(newTasks));
 };

 return (
 <>
 <Header />
 <TaskForm addTask={addTask} />
 <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
 </>
 );
};

export default App;
