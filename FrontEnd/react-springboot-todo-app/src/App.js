import React , { Component} from 'react'; 
import logo from './logo.svg';
import FirstComponent, { SecondComponent } from './components/learningexamples/FirstComponent'
import ThirdComponent, { FourthComponent } from './components/learningexamples/ThirdComponent'
import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
       My Hello World - Sreehari
       <FirstComponent/>
       <SecondComponent/>
       <ThirdComponent/>
       <FourthComponent/>
      </div>
    );
  }

}



export default App;
