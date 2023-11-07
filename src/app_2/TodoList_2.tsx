import React, {FC} from 'react';
import { Button } from '../Button';
import { TasksType } from './App_2';
import { title } from 'process';

type TodoList_2PropsType = {
	title_2: string
	TASKS: Array<TasksType>
}



const TodoList_2: FC<TodoList_2PropsType> = ({title_2, TASKS}) => {

	// const TASKS: Array<TasksType> = props.TASKS

	// const {title_2: myTitle, TASKS: myTASKS} = props

	// const {title_2, TASKS} = props

	const ListItems: Array<JSX.Element> = []
		for (let i = 0; i < TASKS.length; i++) {
			const List: JSX.Element=
			<li>
				<input type="checkbox" checked={TASKS[i].isDone} />
				<span>{TASKS[i].opis}</span>
			</li>
			ListItems.push(List)
		}

	return (
		<div>
			<div className='todoList'>
				<h3>{title_2}</h3>
				<div >
					<input />
					<Button name="+"/>
				</div>
				<ul>
					{ListItems}
				</ul>
				<div>
					<Button name = "All"/>
					<Button name = "Active"/>
					<Button name = "Completed"/>
				</div>
			</div>
		</div>
	);
};

export default TodoList_2;