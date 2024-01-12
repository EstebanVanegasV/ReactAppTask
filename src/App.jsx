import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
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
  <ChakraProvider>
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
 </ChakraProvider>
 );
};

export default App;
