import React from 'react';

type TypeDataProps = {
	title: string
	tasks:Array<TasksTypeProps>
	students: Array<string>

}

type TasksTypeProps = {
	taskId: number
	title: string
	isDone: boolean

}
type PropsType = {
	data:TypeDataProps
}
export const TASKS: React.FC<PropsType> = ({ data}) => {
	return (
		<div>
			<h2>{data.title}</h2>
			<ul>
				{data.tasks.map(element => <li>{element.title}</li>)}
			</ul>
			<ul>
				{data.students.map(element => <div>{element}</div>)}
			</ul>
		</div>
	);
};
