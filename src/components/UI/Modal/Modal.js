import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show
	}

	componentWillMount() {
		console.log('Modal will update');
	}

	render () {
		return (
			<Aux>
				<Backdrop show={this.props.show} onBackdropClick={this.props.modalClosed} />
				<div className={classes.Modal}>
					{this.props.children}
				</div>
			</Aux>
		)

	}
} 
export default Modal
