import React from 'react'
import {NavLink} from 'react-router-dom'
import {setUser} from '../action_creators/user'
import { Dropdown, Menu, Button, Icon, Popup, Modal } from 'semantic-ui-react';


const NavBar = (props) => {

  console.log(props)

  const handleLogout = (props) => {
    localStorage.clear()
    setUser({})
    // props.history.push("/")
  }

  React.useEffect(() => {
    console.log(localStorage)
  }, [localStorage])
  

  return(
    <div>
      {localStorage.token
      ?
      <ul className='nav'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleLogout}>Log out</NavLink>
        </li>
      </ul>
      :
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/volunteer_login">Volunteer</NavLink>
        </li>
        <li>
          <NavLink to="/organization_login">Organization</NavLink>
        </li>
      </ul>}
    </div>
  )
};

export default NavBar;