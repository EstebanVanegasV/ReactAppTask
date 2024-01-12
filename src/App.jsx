import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import { TaskProvider } from './context/TaskProvider';
import { ThemeProvider } from './context/ThemeContext';
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
