import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment'

 class ListTodosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			message: null
		};
	}

	componentWillUnmount = ()=> {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate= (nextProps, nextState)=>{
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount=()=> {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos=()=> {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ todos: response.data })
                }
            )
    }

    deleteTodoClicked=(id)=> {
        let username = AuthenticationService.getLoggedInUsername()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()
                }
            )

    }

	addTodoClicked = ()=> {
        this.props.history.push(`/todos/-1`)
    }


	updateTodoClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
    }

	render() {
		return (
			<div>
				<h1>List Todos</h1>
				{this.state.message && <div class="alert alert-success">{this.state.message}</div>}
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Target Date</th>
								<th>IsCompleted?</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{this.state.todos.map((todo) => (
								<tr key={todo.id}>
									<td>{todo.description}</td>
									<td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
									<td>{todo.done.toString()}</td>
									<td>
										<button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>
									</td>
									<td>
										<button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
				</div>
			</div>
		);
	}

	
}


export default ListTodosComponent