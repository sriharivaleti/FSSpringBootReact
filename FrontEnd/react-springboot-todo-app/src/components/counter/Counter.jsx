import React, { Component } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}
	render() {
		return (
			<div className="counter">
				<div>
					<CounterButton
						value={5}
						parentIncreamentMethod={this.increment}
						parentDecrementMethod={this.decrement}
					/>
					<CounterButton
						value={10}
						parentIncreamentMethod={this.increment}
						parentDecrementMethod={this.decrement}
					/>
					<CounterButton
						value={20}
						parentIncreamentMethod={this.increment}
						parentDecrementMethod={this.decrement}
					/>
				</div>

				<span className="counter">{this.state.counter}</span>

				<div>
					<button onClick={this.resetCounter} className="reset">
						Reset
					</button>
				</div>
			</div>
		);
	}

	increment = (by) => {
		this.setState({
			counter: this.state.counter + by
		});
	};

	decrement = (by) => {
		this.setState((prevState) => {
			return { counter: prevState.counter - by };
		});
	};
	resetCounter = () => {
		this.setState({
			counter: 0
		});
	};
}
export default Counter;
