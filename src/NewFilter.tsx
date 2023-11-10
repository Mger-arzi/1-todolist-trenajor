import React from 'react';
import { App } from './App';
import { MoneyType, FilterType } from './App';

type NewFilterProps = {
	filteredMoney: Array<MoneyType>
	filterCallback: (filterName: FilterType)=>void
}

const NewFilter = (props: NewFilterProps) => {
	const {filteredMoney, filterCallback} = props

	return (
		<div>
			<ul>
			{filteredMoney.map((objFromMoneyArr, index) => {
				return (
					<li key={index}>
						<span>{objFromMoneyArr.banknote}</span>
						<span>{objFromMoneyArr.nominal}</span>
						<span>{objFromMoneyArr.number}</span>
					</li>
				);
			})}
		</ul>
			<div style={{marginLeft: "30px"}}>
					<button onClick={ ()=> filterCallback("all")}>all</button>
					<button onClick={ ()=> filterCallback("ruble")}>ruble</button>
					<button onClick={ ()=> filterCallback("dollar")}>dollar</button>
			</div>
		</div>
	);
};

export default NewFilter;