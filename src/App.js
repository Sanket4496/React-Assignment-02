import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Validation/Validation'
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput : ''
  }

  inputChangeListener = (event) => {
    this.setState({userInput : event.target.value})
  };

  deleteCharacter = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText});
  }


  render(){
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char
      character = {ch}
      key = {index}
      clicked = {() => this.deleteCharacter(index)} 
      />
    }
    )

    return (
      <div className="App">
      <input onChange = {(event) => this.inputChangeListener(event)} value = {this.state.userInput}/>
      <p> The size of the input : {this.state.userInput.length}</p>
      <Validation inputLength = {this.state.userInput.length}/>
      {charList}
      </div>
    );
  }  
}

export default App;
