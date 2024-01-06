import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskContext, { TaskProvider } from './TaskContext';
import './App.css';

const App = () => {
 return (
 <TaskProvider>
 <Header />
 <TaskForm />
 <TaskList />
 </TaskProvider>
 );
};

export default App;
