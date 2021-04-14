import React from 'react';
import {useState} from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon, Input, List } from 'semantic-ui-react';



const VolunteerSignup = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = (data) => {
        return fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resp => {
            if (data.error) {
                console.error(resp.error)
            } else {
                // localStorage.token = token

            }
        })
    }

    const handleSubmit = () =>{

    }

    const handleChange = () => {

    }

    return(
        <Grid textAlign='center' id="Signup-Grid" verticalAlign='middle'>
      <Grid.Column className="Signup-Column">
        <Header as='h2' className="Signup-Header" textAlign='center'>
          <Icon name='signup' />
          Sign Up
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment>
            <Form.Field
              fluid 
              placeholder='First Name'
              control={Input}
              name='firstName'
              onChange={handleChange}
            />
            <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
              name='email'
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
            />
            <Button className="Signup-Button-Color" fluid size='large'>
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    )
}

export default VolunteerSignup;

