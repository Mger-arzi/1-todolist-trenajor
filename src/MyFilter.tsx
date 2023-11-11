import { type } from 'os';
import React, { FC } from 'react';
import { FilterType,  MyMoneyType } from './App';


type MyFilterPropsType = {
	MyFilter: Array<MyMoneyType>
	MyFilterCollback: (filterNominal: FilterType) => void
}
export const MyFilter = (props: MyFilterPropsType) => {

	

	return (
		<div>
			<ul>
				{props.MyFilter.map((MyObj, index) =>{
					return(
						<li>
							<span>{MyObj.banknote } - </span>
							<span>{MyObj.nominal} - </span>
							<span>{MyObj.number} - </span>
						</li>
					)
				})}
			</ul>

			<div>
				<button onClick={ ()=> props. MyFilterCollback(100)}>100</button>
				<button onClick={ ()=> props.MyFilterCollback(50)}>50</button>
				<button onClick={ ()=> props.MyFilterCollback("all")}>All</button>
			</div>
		</div>
	);
}
