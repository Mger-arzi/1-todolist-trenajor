import React from 'react';
import TodoList_2 from './TodoList_2';
import "../App"


export type TasksType = {
	id: number
	opis: string
	isDone: boolean
}

const TASKS_1 = [
	{ id: 1, opis: "HTML/CSS", isDone: true },
	{ id: 2, opis: "JS", isDone: false },
	{ id: 3, opis: "React", isDone: true },
]

const TASKS_2 = [
	{ id: 1, opis: "Moloko", isDone: true },
	{ id: 2, opis: "JSake", isDone: true },
	{ id: 3, opis: "Hleb", isDone: true },
]


const App_2 = () => {
	
	return (
		<div className="App">
			<TodoList_2 title_2='Мой туду_лист__понидельник' TASKS = {TASKS_1} />
			<TodoList_2 title_2='Мой туду_лист__вторник' TASKS = {TASKS_2}/>
			{/* <TodoList_2 title_2='Мой туду_лист__среда'/> */}
		</div>
	);
};

export default App_2;