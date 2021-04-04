import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    logging_in_as: "user"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.targetvalue
    })
  }

  handleSubmit = (e) => {
    console.log(this)
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

    // let {formName} = this.props
    // let {name, password} = this.state
    // console.log("form", this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="name">Username:</label>
        <input type="text" autoComplete="off" 
          name="name" 
          value={name} 
          onChange={this.handleChange}
          />
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" 
          name="password" 
          value={password} 
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
    );
}

export default LoginForm;