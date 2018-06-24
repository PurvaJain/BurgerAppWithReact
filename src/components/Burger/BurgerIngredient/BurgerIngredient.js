import React, { Component } from 'react'
import classes from './BurgerIngredient.css'
import Proptypes from 'prop-types'
// import Aux from '../../../hoc/Aux'

class BurgerIngredient extends Component {
	render () {
			let ingredient = null
			switch (this.props.type) {
				case ('bread-bottom'): 
				ingredient = <div className={classes.BreadBottom}></div>
				break
				case ('cheese'): 
				ingredient = <div className={classes.Cheese}></div>
				break
				case ('salad'): 
				ingredient = <div className={classes.Salad}></div>
				break
				case ('bread-top'): ingredient = (
					<div className={classes.BreadTop}>
						<div className={classes.Seeds1}></div>
						<div className={classes.Seeds2}></div>
					</div>
					)
					break
				case ('tomato'): 
				ingredient = <div className={classes.Tomato}></div> 
				break
				case ('patties'): 
				ingredient = <div className={classes.Patties}></div> 
				break
				default: 
					ingredient = null
			}
				return ingredient
	}
}

BurgerIngredient.propTypes = {
	type: Proptypes.string.isRequired
}

export default BurgerIngredient