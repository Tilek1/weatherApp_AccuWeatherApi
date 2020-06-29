import React , { Component } from 'react';
import Left from './components/Left'
import './App.css'
import Right from './components/Right'

class App extends Component {

  state = {
    text: ''
  }

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({
    [name]: value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.state.text.length > 0 ? this.props.getWeather(this.state.text) : alert("Please enter city name")
  this.setState({
    text: ''
  })
}

  render() {
    return (
      <div className="App">
        <Left className="left"/>
        <Right className="right"/>
      </div>
    )
  }
}

export default App

































/*import React from 'react';

import User from './components/User'
import Main from './components/Main'
import {connect} from 'react-redux'

import {setName} from './actions/userActions';

class App extends React.Component {
  constructor() {
    super();
  }

  changeUsername(newName) {
    this.props.setName(newName)
  }

  render() {
    return (
      <div className="container"> 
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username= {this.props.user.name}/>
      
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)*/