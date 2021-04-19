import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addOrg} from '../action_creators/organizations';
import useFormFields from '../hooks/useFormFields'
import {Link, withRouter} from 'react-router-dom';
import { setOrgInfo } from '../action_creators/user';

const OrgSignup = (props) => {

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    fetch('http://localhost:3000/organization_signup', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        // name: fields.name,
        email: fields.email,
        password: fields.password
      })
    })
    .then(res => res.json())
    .then(orgInfo => {
      setOrgInfo(orgInfo)
      addOrg(orgInfo)
      localStorage.setItem("token", orgInfo.token)

      // localStorage.token = orgInfo.token
      props.history.push('/organization_home')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{formName}</h1> */}
      {/* <label htmlFor='name'>Name:</label>
      <input type="text" autoComplete='off' 
        placeholder='Name'
        name='name' 
        // value={name} 
        onChange={handleFieldChange}
        /> */}
      <label htmlFor='password'>Password:</label>
      <input type='password' autoComplete='off' 
        placeholder='Password'
        name='password' 
        // value={password} 
        onChange={handleFieldChange}
      />
      <label htmlFor='email'>Email:</label>
      <input type='email' autoComplete='off' 
        placeholder='Email'
        name='email' 
        // value={email} 
        onChange={handleFieldChange}
      />
      <input type='submit' value='Submit'/>
    </form>
  );
}

export default OrgSignup;
