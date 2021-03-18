import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';

export default class WelcomeComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : "",
            errorMessage:""
        }
    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                   Click here to get your customized message.
                  <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get message </button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.errorMessage}
                </div>
            </>
        );
    }

    retriveWelcomeMessage = ()=>{
        // HelloWorldService.executeHelloWorldService()
        // .then(Response => this.handleSuccessfulResponse(Response));

        // HelloWorldService.executeHelloWorldBeanService().
        // then(Response => this.handleSuccessfulResponse(Response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name).
        then(Response => this.handleSuccessfulResponse(Response)).
        catch(error=> this.handleErrorResponse(error))
    }

    handleSuccessfulResponse = (response) =>{
        console.log(response)
        this.setState({
            welcomeMessage :response.data.message
        })
    }
    handleErrorResponse = (error) =>{
        console.log(error.response)
        this.setState({
            errorMessage :error.response.data.message
        })
    }

}