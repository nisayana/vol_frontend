// import React, { Component } from 'react';

// class RegisterForm extends Component {

//   state = {
//     name: "",
//     password: "",
//     age: 0
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.handleSubmit(this.state)
//   }

//   handleChange = (e) => {
//     let {name, value} = e.target
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     let {formName} = this.props
//     let {name, password, age} = this.state

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h1>{formName}</h1>
//         <label htmlFor="name">Username:</label>
//         <input type="text" autoComplete="off" 
//           name="name" 
//           value={name} 
//           onChange={this.handleChange}
//           />
//         <label htmlFor="password">Password:</label>
//         <input type="password" autoComplete="off" 
//           name="password" 
//           value={password} 
//           onChange={this.handleChange}
//         />
//         <label htmlFor="age">Age:</label>
//         <input type="age" autoComplete="off" 
//           name="age" 
//           value={age} 
//           onChange={this.handleChange}
//         />
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }

// }

// export default RegisterForm;