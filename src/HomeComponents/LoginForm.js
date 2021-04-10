import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Grid, Select, Segment, Header, Divider, Image, Button } from 'semantic-ui-react';
import {setUser, setLead} from '../action_creators/user';

class LoginForm extends React.Component {

  state = {
    username: "",
    leadname: "",
    password: "",
    logging_in_as: "user"
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
    console.log(this)
    e.preventDefault()
    if(this.state.logging_in_as === 'user') {
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
      .then(userInfo => {
        this.props.setUser(userInfo)
        localStorage.token = userInfo.token
        this.props.history.push('/')
      })
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
      .then(leadInfo => {
        this.props.setLead(leadInfo)
        localStorage.token = leadInfo.token
        this.props.history.push('/')
      })
    }
  }

    // let {formName} = this.props
    // let {name, password} = this.state
    // console.log("form", this.props)
    render() {

      const { username, password } = this.state

      const userTypes = [
        {key: 'user', value: 'user', text: 'Volunteer'},
        {key: 'lead', value: 'lead', text: 'Organization Lead'}
    ]
    return (
      <Segment>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column verticalAlign='middle'>
                    <Header color='teal' textAlign='center'>Log In Here</Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name='password'
                            value={password}
                            type='password'
                            onChange={this.handleChange}
                        />
                        <Select placeholder='Select User Type' options={userTypes} onChange={this.handleSelect} />
                        <Button floated='right' content='Log In' />
                    </Form>
                </Grid.Column>

            </Grid>
            </Segment>
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