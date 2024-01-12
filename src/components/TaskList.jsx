import { useContext } from 'react';
import Task from './Task.jsx';
import TaskContext from '../context/TaskContext.jsx';

const TaskList = () => {
 const { state,dispatch } = useContext(TaskContext);

 return (
 <ul>
 {state.map((task) => (
 <Task key={task.id} task={task} />
 ))}
 </ul>
 );
};

export default TaskList;
