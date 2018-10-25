import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {addgun,lessgun,addgunLatter} from './redux'

// App=connect(state=>state,{addgun,lessgun})(App)
class App extends Component {
  constructor(props){
    super(props)
    // this.state={num:10}
  }
  render() {
    return (
      <div >
       <div>还剩多少枪{this.props.num}</div>
       <button onClick={this.props.addgun}>加一把</button>
       <button onClick={this.props.lessgun}>减一把</button>
       <button onClick={this.props.addgunLatter}>过一会再加一个</button>
      </div>
    );
  }
}
App=connect(state=>state,{addgun,lessgun,addgunLatter})(App)
export default App;
