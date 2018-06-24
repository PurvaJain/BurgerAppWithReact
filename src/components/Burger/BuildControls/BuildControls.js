import React from 'react'
import classes from './BuildControls.css'
import BuildControl from '../BuildControl/BuildControl'

const controls = [
		{label: 'Salad', type:'salad'},
		{label: 'Cheese', type:'cheese'},
		{label: 'Patties', type:'patties'},
		{label: 'Tomato', type:'tomato'}
	]

const buildControls = (props) => {
	return (
		<div className={classes.BurgerControls} >
			<p>Total Amount: <strong>${props.price.toFixed(2)}</strong></p>
				{
					controls.map(control => {
						return <BuildControl 
						key={control.label} 
						label={control.label}
						added={() => props.addIngredient(control.type)}
						removed={() => props.removeIngredient(control.type)}
						disabled={props.disabled[control.type]}
						/>
					})
				}
			<button
			className={classes.OrderButton}
			disabled={!props.purchaseable}
			onClick={props.onOrderSummaryClick}
			>ORDER NOW</button>
		</div>
	)
}

export default buildControls