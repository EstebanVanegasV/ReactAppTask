import React, { useReducer, useMemo } from 'react';
import  TaskContext  from './TaskContext.jsx';

const initialState = [
 { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', completed: false },
 { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', completed: true },
 { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', completed: false },
];

function taskReducer(state, action) {
 switch (action.type) {
 case 'ADD_TASK':
 return [...state, action.payload];
 case 'DELETE_TASK':
 return state.filter((task) => task.id !== action.payload);
 case 'TOGGLE_COMPLETE':
 return state.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task);
 case 'EDIT_TASK':
 return state.map((task) => task.id === action.payload.id ? { ...task, ...action.payload } : task);
 default:
 console.error(`Unknown action: ${action.type}`);
 return state;
 }
}

export function TaskProvider({ children }) {
 const [state, dispatch] = useReducer(taskReducer, initialState);

 const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

 return (
 <TaskContext.Provider value={value}>
 {children}
 </TaskContext.Provider>
 );
}
