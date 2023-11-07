import React from 'react'
import { Button } from './Button'

type TodoListPropsType = {
	title: string
	tasks: Array<TaskType>
}
export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export const TodoList: React.FC<TodoListPropsType> = ({title, tasks} ) => {
	//1
	// const title = props.title
	// const tasks: Array<TaskType> = props.tasks

	//2
	// const {title: myTitle, tasks: myTasks} = props
	//3
	// const {title, tasks} = props


	const listItems: Array<JSX.Element> = []
	for(let i = 0; i < tasks.length; i++){
		const listItem: JSX.Element = 
		<li>
				<input type="checkbox" checked={tasks[i].isDone} />
				<span>{tasks[i].title}</span>
		</li>
			listItems.push(listItem)
	}
	return(
		<div>
			<div className='todoList'>
				<h3>{title}</h3>
				<div >
					<input />
					<Button name="+"/>
				</div>
				<ul>
					{listItems}
				</ul>
				<div>
					<Button name = "All"/>
					<Button name = "Active"/>
					<Button name = "Completed"/>
				</div>
			</div>
		</div>
	)
}