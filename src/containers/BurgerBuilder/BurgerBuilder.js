import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const ingredients_price = {
	salad: 0.5,
	cheese: 0.8,
	patties: 1.2,
	tomato: 1
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			cheese: 0,
			patties: 0,
			tomato: 0
		},
		totalPrice: 4,
		purchaseable: false,
		purchasing: false
	}

	onOrderSummaryClick = () => {
		this.setState({
			purchasing: true
		})
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false
		})
	}

	purchaseContinueHandler = () => {
		alert('You Continue!')
	}

	updatePurshaseState = (ingredients) => {
		const sum = Object.keys(ingredients).map(ingredientKey => {
			return ingredients[ingredientKey]
		}).reduce((sum, el) => {
			return sum + el
		}, 0)

		this.setState({
			purchaseable: sum > 0
		})
	}

	addIngredientHandler = (type) => {
		// Adding ingredients
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients}
		updatedIngredients[type] = updatedCount

		// Adding ingredient's price
		const priceAddition = ingredients_price[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice + priceAddition
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})
		this.updatePurshaseState(updatedIngredients)
	}

	removeIngredientHandler = (type) => {
		// Removing ingredients
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount - 1;
		const updatedIngredients = {...this.state.ingredients}
		if(updatedIngredients[type] <= 0) {
			return
		}
		updatedIngredients[type] = updatedCount

		// Adding ingredient's price
		const priceDeduction = ingredients_price[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceDeduction

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})

		this.updatePurshaseState(updatedIngredients)
	}

	render() {
		const disabledInfo = {...this.state.ingredients}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Aux>
			{
				this.state.purchasing &&
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
					<OrderSummary 
						ingredients={this.state.ingredients} 
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
			}
				

				
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
				addIngredient={this.addIngredientHandler}
				removeIngredient={this.removeIngredientHandler}
				price={this.state.totalPrice}
				disabled={disabledInfo}
				purchaseable={this.state.purchaseable}
				onOrderSummaryClick={this.onOrderSummaryClick}
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder
