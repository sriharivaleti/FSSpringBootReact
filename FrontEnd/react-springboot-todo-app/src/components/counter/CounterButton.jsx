import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Counter.css';

class CounterButton extends Component {
	constructor() {
		super();
		// this.state = {
		// 	counter: 0
		// };
		this.increment = this.increment.bind(this);
	}

	render() {
		return (
			<div className="counter">
				<button onClick={this.increment}>+{this.props.value}
				</button>
                <button onClick={this.decrement}>-{this.props.value}
				</button>
			
			</div>
		);
	}

	increment() {
        console.log(this.props.value);
		this.props.parentIncreamentMethod(this.props.value);
	}
    decrement = () => {
        console.log(this.props.value);
		this.props.parentDecrementMethod(this.props.value);
	}

	
}

CounterButton.defaultProps = {
    value : 1
   
}

CounterButton.propTypes = {
    value: propTypes.number
}

export default CounterButton;
