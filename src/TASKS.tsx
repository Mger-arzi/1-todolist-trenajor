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

const topCars = [
	{manufacturer:'BMW', model:'m5cs'},
	{manufacturer:'Mercedes', model:'e63s'},
	{manufacturer:'Audi', model:'rs6'}
	]

	type topCarType = {
		cars: Array<TypeCar>
	}

type TypeCar = {
	manufacturer: string
	model: string
}


export const TASKS: React.FC<topCarType> = ({ cars}) => {
	return (
		<div>
			<table >
				<tbody>
					<tr>
						<td></td>
						<td>cell is row 0 column 1</td>
					</tr>
					<tr>
						<td>cell is row 1 column 0</td>
						<td>cell is row 1 column 1</td>
					</tr>
				</tbody>
			</table>
	

			{/* <h2>{data.title}</h2>
			<ul>
				{data.tasks.map(element => <li>{element.title}</li>)}
			</ul>
			<ul>
				{data.students.map(element => <div>{element}</div>)}
			</ul> */}
		</div>
	);
};
