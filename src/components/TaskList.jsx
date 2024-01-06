import React, { useContext } from 'react';
import Task from './Task';
import TaskContext from '../TaskContext';

const TaskList = () => {
 const { state } = useContext(TaskContext);

 return (
 <ul>
 {state.map((task) => (
 <Task key={task.id} task={task} />
 ))}
 </ul>
 );
};

export default TaskList;
