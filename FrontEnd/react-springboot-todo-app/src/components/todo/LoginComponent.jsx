import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

export default class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'sreehari',
			password: '',
			hasLoginFailed: false,
			showSuccessMessage: false
		};
	}

	render() {
		return (
			<div >
				<h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-warning" style={{color:'red'}}>Invalid Credentials</div>}
				<div className="container" style={{margin:"0px 750px"}}>
					
					{this.state.showSuccessMessage && <div>Login Sucessful</div>}
					<table>
						<tr>
							<td>User Name:</td>{' '}
							<td>
								{' '}
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Password:</td>
							<td>
								{' '}
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<button className="btn btn-success" onClick={this.loginClicked}>
									Login
								</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}

	handleChange = (event) => {
		console.log(event.target.name);
		console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	loginClicked = () => {
		if (this.state.username === 'sreehari' && this.state.password === 'sreehari') {
			AuthenticationService.registerSucessfulLogin(this.state.username, this.state.password);
			this.props.history.push(`/welcome/${this.state.username}`);
			this.setState({
				hasLoginFailed: false,
				showSuccessMessage: true
			});
		} else {
			this.setState({
				hasLoginFailed: true,
				showSuccessMessage: false
			});
		}
		console.log(this.state);
	};
}
