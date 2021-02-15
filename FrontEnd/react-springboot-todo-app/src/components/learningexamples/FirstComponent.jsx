import React, { Component } from 'react'
//Class Component
class FirstComponent extends Component{

    render(){
      return (
        <div >
         <h1>FirstComponent</h1>
        </div>
      )
    }
  
  }

  export class SecondComponent extends Component{
    render(){
        return (
          <div>
           <h2>SecondComponent</h2>
          </div>
        );
      }
  }

  export default FirstComponent;
 