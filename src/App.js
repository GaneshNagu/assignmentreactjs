import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Secondoutput from './Secondoutput/Secondoutput';
import Personlast from './Personlast/Personlast';
import Heading from './Heading/Heading';

class App extends Component {
  state = {
    details: [
      { usrname: 'Bubbly' }
    ]
  }

  nameChangehandler = (event) => {
    // alert("called");

    this.setState({
      details: [
        { usrname: event.target.value }
      ]
    });

  }

  resethandlername = () => {
    this.setState({
      details: [
        { usrname: 'Bubbly' }
      ]
    })
  }

  print = () => {
    window.print();
  }

  render() {
    const printstyle = {
      height: '25px',
      clear: 'both',
      margin: '10px auto',
      marginTop: '120px',
      marginRight: '-100px',
      // ----------------------
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px',
      cursor: 'pointer'

    };
    return (
      <div className="mainpage">
        <div>
          <Heading />
        </div>
        <div className="App">
          <Person changed={this.nameChangehandler} usrname={this.state.details[0].usrname} />
          <button onClick={this.resethandlername}>click to reset</button>
          <Secondoutput usrname={this.state.details[0].usrname} />
          <Personlast usrname={this.state.details[0].usrname} />
          <button onClick={this.print} style={printstyle}>Print this page</button>
        </div>
      </div>
    );
  }
}

export default App;
