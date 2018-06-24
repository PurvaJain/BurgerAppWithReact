import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
	let tranformedIngredients = Object.keys(props.ingredients)
		.map(ingredientKey => {
			return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
				return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
			})
		}).reduce((arr,el) => {
			return arr.concat(el)
		}, [])
		if (tranformedIngredients.length === 0) {
			tranformedIngredients = <p>Please add the ingredients</p>
		}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{tranformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	)
}

export default burger
