import React , { Component} from 'react'; 
import Counter from './components/counter/Counter'
import Toggle from './components/toggle/Toggle'
import './App.css';

class App extends Component{

 state = {
    display:true,
    value:'On'
  };

  render(){
    return (
      <div className="App">
        <Counter></Counter>
        <button onClick={this.toggleButton}>{this.state.value}</button>
        <Toggle></Toggle>
      </div>
    );
  }

  toggleButton = () =>{
    let display = this.state.display;
    let value1 = 'On';
    if(display){
      value1 = 'Off'
    }

    this.setState(
      (prevState) =>{

        return {
          display : !prevState.display,
          value : value1
        };
      }
    );
  }
}



export default App;
