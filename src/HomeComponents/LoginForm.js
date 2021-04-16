import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import {setUserInfo, setOrgInfo, saveErrorToState} from '../action_creators/user';

class LoginForm extends React.Component {

  state = {
    username: '',
    leadname: '',
    email: '',
    password: '',
    logging_in_as: 'user'
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

  componentDidMount() {
    let url = window.location.href.split('/')
    url = url[url.length-1]
    console.log(url)

    if ( url === 'org_login') {
      this.setState({logging_in_as: 'organization'})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.logging_in_as === 'user') {
      fetch('http://localhost:3000/user_login', {
        method: "POST",
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.error){
          alert(resp.error)
        } else {
          this.props.setUserInfo(resp)
          console.log(localStorage)
          localStorage.setItem("token", resp.token)
          console.log(localStorage)
          // localStorage.token = resp.token
          this.props.history.push('/') //user_home
        }
      })
    } else {
      fetch('http://localhost:3000/organization_login', {
        method: "POST",
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(resp => {
        if (resp === "error") {
          alert(resp.error)
        } else {
          this.props.setOrgInfo(resp)
          localStorage.setItem("token", resp.token)
          // localStorage.token = resp.token
          this.props.history.push('/organization_home')
        }
      })
    }
  }

    render() {

    const givenUrl = this.props.match.url

    const { email, password } = this.state

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
              placeholder='Email' 
              name='email'
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
      setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
      setOrgInfo: (orgInfo) => dispatch(setOrgInfo(orgInfo))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))