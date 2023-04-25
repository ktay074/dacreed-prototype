import * as React from 'react';
import { Range } from 'react-range';

export default class Slider extends React.Component {
state = { values: [2] };
render() {
	return (
	<>
	<h3 className='pb-3 pt-3 text-neutral-500'>Simplicity</h3>
	<Range
		step={1}
		min={0}
		max={5}
		values={this.state.values}
		onChange={(values) => this.setState({ values })}
		renderTrack={({ props, children }) => (
		<div className='rounded-3xl bg-indigo-200 max-w-md w-3/5'
			{...props}
			style={{
			...props.style,
			height: '20px',
			width: '100%',
			}}
		>
			{children}
		</div>
		)}
		renderThumb={({ props }) => (
		<div className='bg-indigo-700 rounded-full'
			{...props}
			style={{
			...props.style,
			height: '22px',
			width: '22px',
			}}
		/>
		)}
	/>
	</>
	);
}
}
