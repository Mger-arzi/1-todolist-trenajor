import React from "react";

type TypeDataProps = {
	title: string;
	tasks: Array<TasksTypeProps>;
	students: Array<string>;
};

type TasksTypeProps = {
	taskId: number;
	title: string;
	isDone: boolean;
};
type PropsType = {
	data: TypeDataProps;
};

export type topCarType = {
	cars: Array<TypeCar>;
};

type TypeCar = {
	manufacturer: string;
	model: string;
};

export const TASKS = (props: topCarType) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						{props.cars.map((element, index) => {
							return <td key={index}>{index + 1}</td>;
						})}
					</tr>
					<tr>
						{props.cars.map((el) => (
							<td>{el.model}</td>
						))}
					</tr>
					<tr>
						{props.cars.map((el) => (
							<td>{el.manufacturer}</td>
						))}
					</tr>
				</tbody>
			</table>

			{/* <h2>{data.title}</h2>
			<ul>
				{data.tasks.map((element) => (
					<li>{element.title}</li>
				))}
			</ul>
			<ul>
				{data.students.map((element) => (
					<div>{element}</div>
				))}
			</ul> */}
		</div>
	);
};
