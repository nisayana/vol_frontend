import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: "",
    password: ""
  }

  handleSubmit = (e) => {
    console.log(this)
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, password} = this.state
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

}

export default Form;