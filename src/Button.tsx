import React from 'react';

type BTNPropsType = {
	name: string
}
export const Button: React.FC<BTNPropsType> = (props) => {
	return (
		<button>
			{props.name}
		</button>
	);
};

