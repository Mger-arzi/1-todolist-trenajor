import React from 'react';
import './App.css';
import { TaskType, TodoList } from './TodoList';

function App() {
    const todoListTitle_1 = "What to learn"
    const todoListTitle_2 = "What to buy"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS/ES6", isDone: false},
        {id: 3, title: "REACT", isDone: false},
    ]

    const tasks_2: Array<TaskType> = [
        {id: 4, title: "Beer", isDone: true},
        {id: 5, title: "fish", isDone: true},
        {id: 6, title: "Cheeps", isDone: true},
        {id: 6, title: "Cheeps", isDone: true},
        {id: 6, title: "Cheeps", isDone: true},
        {id: 6, title: "Cheeps", isDone: true},
        {id: 6, title: "Cheeps", isDone: true},
    ]
    return (
        <div className="App">
            <TodoList title = {todoListTitle_1} tasks = {tasks_1}/>
            <TodoList title = {todoListTitle_2}  tasks = {tasks_2}/>

        </div>
    );
}

export default App;
