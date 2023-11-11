import React, { useState } from "react";
import "./App.css";
import { TASKS } from "./TASKS";
import { topCarType } from "./TASKS";
import NewFilter from "./NewFilter";

export type MoneyType = {
	banknote: string
	nominal: number
	number: string
}
export type FilterType = "all" | "ruble" | "dollar"

export function App() {
	// const data1 = {
	//     title: "What to do",
	//     tasks: [
	//         {taskId: 1, title: "HTML&CSS2", isDone: true},
	//         {taskId: 1, title: "HTML&CSS2", isDone: true},
	//         {taskId: 1, title: "HTML&CSS2", isDone: true},
	//         {taskId: 1, title: "HTML&CSS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true},
	//         {taskId: 2, title: "JS2", isDone: true}
	//     ],
	//     students: [
	//         'Jago Wormald1',
	//         'Saul Milne2',
	//         'Aariz Hester3',
	//         'Dion Reeve4',
	//         'Anisa Ortega5',
	//         'Blade Cisneros6',
	//         'Malaikah Phelps7',
	//         'Zeeshan Gallagher8',
	//         'Isobella Vo9',
	//         'Rizwan Mathis10',
	//         'Menaal Leach11',
	//         'Kian Walton12',
	//         'Orion Lamb13',
	//         'Faizah Huynh14',
	//         'Crystal Vaughan15',
	//         'Vivien Hickman16',
	//         'Stuart Lu17',
	//         'Karol Davison18',
	//         'Dario Burns19',
	//         'Chloe Rich20',
	//         'Martyna Felix',
	//         'Nida Glass',
	//         'Maeve Miles',
	//         'Hasnain Puckett',
	//         'Ayman Cano',
	//         'Safwan Perry',
	//         'Fox Kelly',
	//         'Louise Barlow',
	//         'Malaki Mcgill',
	//         'Leanna Cline',
	//         'Willard Hodge',
	//         'Amelia Dorsey',
	//         'Kiah Porter',
	//         'Jeanne Daly',
	//         'Mohsin Armstrong',
	//         'Laurie Rangel',
	//         'Princess Tierney',
	//         'Kasim Kendall',
	//         'Darryl Cope',
	//         'Elysha Ray',
	//         'Liyana Harris',
	//         'Kashif Blackburn',
	//         'Atif Zimmerman',
	//         'Sila Hartley',
	//         'Ralphie Hebert',
	//     ]
	// }
	// const data2 =   {
	//     title: "What to learn",
	//     tasks: [
	//         {taskId: 1, title: "HTML&CSS", isDone: true},
	//         {taskId: 2, title: "JS", isDone: true}
	//     ],
	//     students: [
	//         'Rick Kane',
	//         'Finnlay Bentley',
	//         'Samia North',
	//         'Isaac Morton',
	//         'Lily-Ann Clifford',
	//         'Thalia Park',
	//         'Sapphire Cruz',
	//         'Cieran Vazquez',
	//         'Anya Estes',
	//         'Dominika Field',
	//         'Rosanna Chung',
	//         'Safiyah Davey',
	//         'Ryley Beasley',
	//         'Kalvin Trejo',
	//         'Evie-Mae Farrell',
	//         'Juliet Valencia',
	//         'Astrid Austin',
	//         'Lyle Montgomery',
	//         'Nisha Mora',
	//         'Kylie Callaghan',
	//         'Star Wilks',
	//         'Marissa Colley',
	//         'Asa Fuller',
	//         'Leigh Kemp',
	//         'Avleen Dawson',
	//         'Sammy Bonilla',
	//         'Acacia Becker',
	//         'Coral Shepherd',
	//         'Melina Molina',
	//         'Kiran Bailey',
	//         'Clara Escobar',
	//         'Alexandru Horn',
	//         'Brandon-Lee Mercado',
	//         'Elouise Weston',
	//         'King Long',
	//         'Kerri Searle',
	//         'Kanye Hamer',
	//         'Elwood Benitez',
	//         'Mikail Whitaker',
	//         'Bobby Hardy',
	//         'Talha Ferry',
	//         'Priscilla Landry',
	//         'Olivia-Grace Cain',
	//         'Kiaan Wallace',
	//         'Wesley Padilla90',
	//         'Ella-Grace Wooten91',
	//         'Kaif Molloy92',
	//         'Kamal Broadhurst93',
	//         'Bianca Ferrell94',
	//         'Micheal Talbot95',
	//     ]
	// }

	// const topCars = [
	// 	{manufacturer:'BMW', model:'m5cs'},
	// 	{manufacturer:'Mercedes', model:'e63s'},
	// 	{manufacturer:'Audi', model:'rs6'}
	// 	]




	const [money, setMoney] = useState<MoneyType[]>([
		{ banknote: "dollar", nominal: 100, number: "a123456789" },
		{ banknote: "dollar", nominal: 50, number: "b123456789" },
		{ banknote: "ruble", nominal: 100, number: "c123456789" },
		{ banknote: "dollar", nominal: 100, number: "d123456789" },
		{ banknote: "dollar", nominal: 50, number: "e123456789" },
		{ banknote: "ruble", nominal: 100, number: "f123456789" },
		{ banknote: "dollar", nominal: 50, number: "j123456789" },
		{ banknote: "ruble", nominal: 50, number: "h123456789" },
	]);

	const [fietered, setFieltered] = useState<FilterType>("all")

	const clickFilterHandler = (nameButton: FilterType) => {
		setFieltered(nameButton)
	}

	let currentMoney = money
	if (fietered === "ruble") {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
	}
	if (fietered === "dollar") {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
	}

	return (
		<>
			<NewFilter filteredMoney={currentMoney} filterCallback={clickFilterHandler} />
			{/*
      <ul>
			{currentMoney.map((objFromMoneyArr, index) => {
				return (
					<li key={index}>
						<span>{objFromMoneyArr.banknote}</span>
						<span>{objFromMoneyArr.nominal}</span>
						<span>{objFromMoneyArr.number}</span>
					</li>
				);
			})}
		</ul> */}
      {/* <div style={{marginLeft: "30px"}}>
            <button onClick={ ()=> ClickFilterHandler("all")}>all</button>
            <button onClick={ ()=> ClickFilterHandler("ruble")}>ruble</button>
            <button onClick={ ()=> ClickFilterHandler("dollar")}>dollar</button>
        </div> */}
      </>
	
	);
	
}

// type TasksTypeProps = {
//     id: number
//     title: string
//     isDone: boolean
// }

// export type TypeDataProps = {
//     title: string
//     tasks:Array<TasksTypeProps>
//     students: Array<string>

// }

//--------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Tasks} from "./Tasks";
//
// export type DataType = {
//     title: string
//     tasks: Array<TasksType>
//     students: Array<string>
// }
// export type TasksType = {
//     taskId: number
//     title: string
//     isDone: boolean
// }
//
//
// function App() {
//     const data1= {
//         title: "What to do",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS2", isDone: true},
//             {taskId: 2, title: "JS2", isDone: true}
//         ],
//         students: [
//             'Jago Wormald1',
//             'Saul Milne2',
//             'Aariz Hester3',
//             'Dion Reeve4',
//             'Anisa Ortega5',
//             'Blade Cisneros6',
//             'Malaikah Phelps7',
//             'Zeeshan Gallagher8',
//             'Isobella Vo9',
//             'Rizwan Mathis10',
//             'Menaal Leach11',
//             'Kian Walton12',
//             'Orion Lamb13',
//             'Faizah Huynh14',
//             'Crystal Vaughan15',
//             'Vivien Hickman16',
//             'Stuart Lu17',
//             'Karol Davison18',
//             'Dario Burns19',
//             'Chloe Rich20',
//             'Martyna Felix',
//             'Nida Glass',
//             'Maeve Miles',
//             'Hasnain Puckett',
//             'Ayman Cano',
//             'Safwan Perry',
//             'Fox Kelly',
//             'Louise Barlow',
//             'Malaki Mcgill',
//             'Leanna Cline',
//             'Willard Hodge',
//             'Amelia Dorsey',
//             'Kiah Porter',
//             'Jeanne Daly',
//             'Mohsin Armstrong',
//             'Laurie Rangel',
//             'Princess Tierney',
//             'Kasim Kendall',
//             'Darryl Cope',
//             'Elysha Ray',
//             'Liyana Harris',
//             'Kashif Blackburn',
//             'Atif Zimmerman',
//             'Sila Hartley',
//             'Ralphie Hebert',
//         ]
//     }
//     const data2 = {
//         title: "What to learn",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS", isDone: true},
//             {taskId: 2, title: "JS", isDone: true}
//         ],
//         students: [
//             'Rick Kane',
//             'Finnlay Bentley',
//             'Samia North',
//             'Isaac Morton',
//             'Lily-Ann Clifford',
//             'Thalia Park',
//             'Sapphire Cruz',
//             'Cieran Vazquez',
//             'Anya Estes',
//             'Dominika Field',
//             'Rosanna Chung',
//             'Safiyah Davey',
//             'Ryley Beasley',
//             'Kalvin Trejo',
//             'Evie-Mae Farrell',
//             'Juliet Valencia',
//             'Astrid Austin',
//             'Lyle Montgomery',
//             'Nisha Mora',
//             'Kylie Callaghan',
//             'Star Wilks',
//             'Marissa Colley',
//             'Asa Fuller',
//             'Leigh Kemp',
//             'Avleen Dawson',
//             'Sammy Bonilla',
//             'Acacia Becker',
//             'Coral Shepherd',
//             'Melina Molina',
//             'Kiran Bailey',
//             'Clara Escobar',
//             'Alexandru Horn',
//             'Brandon-Lee Mercado',
//             'Elouise Weston',
//             'King Long',
//             'Kerri Searle',
//             'Kanye Hamer',
//             'Elwood Benitez',
//             'Mikail Whitaker',
//             'Bobby Hardy',
//             'Talha Ferry',
//             'Priscilla Landry',
//             'Olivia-Grace Cain',
//             'Kiaan Wallace',
//             'Wesley Padilla90',
//             'Ella-Grace Wooten91',
//             'Kaif Molloy92',
//             'Kamal Broadhurst93',
//             'Bianca Ferrell94',
//             'Micheal Talbot95',
//         ]
//     }
//
//     return (
//         <div className="App">
//             <Tasks data={data1}/>
//             <Tasks data={data2}/>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

//--------------------------------------------------------------
