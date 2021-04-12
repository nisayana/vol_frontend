import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import {setUser, setLead, saveErrorToState} from '../action_creators/user';

class LoginForm extends React.Component {

  state = {
    username: "",
    leadname: "",
    password: "",
    // error_message: "",
    givenUrl: "/volunteer_login"
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e, {value}) => {
    this.setState({
      logging_in_as: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.givenUrl === '/volunteer_login') {
      fetch('http://localhost:3000/user_login', {
        method: "POST",
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.error){
          alert(resp.error)
        } else {
          this.props.setUser(resp)
          localStorage.token = resp.token
          this.props.history.push('/') //user_home
        }
      }
      //   userInfo => {

      // }
      )
    } else {
      fetch('http://localhost:3000/organization_login', {
        method: "POST",
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          leadname: this.state.leadname,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(resp => {
        if (resp === "error") {
          alert(resp.error)
        } else {
          this.props.setLead(resp)
          localStorage.token = resp.token
          this.props.history.push('/organization_home')
        }
      })
    }
  }

    render() {

    const givenUrl = this.props.match.url

    const { username, password } = this.state

    return (
    <Grid textAlign='center' verticalAlign='middle' id="Login-Grid">
      <Grid.Column className="Login-Column">
        <Header as='h2' className="Login-Header" textAlign='center'>
          <Icon name='sign-in' />
          Login to your account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              name='username'
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              onChange={this.handleChange}
            />
            <Button className="Login-Button-Color" fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message className="Login-Message">
          <span>Don't have an account? </span>
          <Link to="/signup">
            Sign Up
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { 
      setUser: (userInfo) => dispatch(setUser(userInfo)),
      setLead: (leadInfo) => dispatch(setLead(leadInfo))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))