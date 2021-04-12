import React from 'react';
import {NavLink} from 'react-router-dom'
import { Dropdown, Menu, Button, Icon, Popup, Modal } from 'semantic-ui-react';


const NavBar = (props) => {

  console.log(props)

  const handleLogout = (props) => {
    localStorage.clear()
    // props.history.push("/")
  }

  return(
    <div>
      {localStorage.token
      ?
      <Menu.Item onClick={handleLogout}>
      <Button className="Navbar-Button-Color Button-Change">Logout</Button>
      </Menu.Item>
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