import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const initialTasks = [
  { id: 1, name: 'Hacer la compra', completed: false },
  { id: 2, name: 'Estudiar React', completed: true },
  { id: 3, name: 'Hacer ejercicio', completed: false },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;