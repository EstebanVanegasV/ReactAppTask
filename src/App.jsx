import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import TaskForm from './components/TaskForm.jsx';
import SobreNosotros from './components/SobreNosotros.jsx';
import Menu from './components/Menu.jsx';
import { TaskProvider } from './context/TaskProvider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

const App = () => {
 return (
 <ThemeProvider>
 <TaskProvider>
 <Router>
 <Header />
 <Menu />
 <Routes>
   <Route path="/" element={<TaskForm />} />
   <Route path="/tareas" element={<TaskList />} />
   <Route path="/sobre-nosotros" element={<SobreNosotros />} />
 </Routes>
 </Router>
 </TaskProvider>
 </ThemeProvider>
 );
};

export default App;
