import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {setUserInfo} from '../action_creators/user';
import { Dropdown, Menu, Button, Icon, Popup, Modal } from 'semantic-ui-react';


const NavBar = (props) => {

  const {token} = useSelector(state => state.userReducer)

  const handleLogout = (props) => {
    localStorage.clear()
    setUserInfo({})
    // props.history.push("/")
  }

  React.useEffect(() => {
    console.log(localStorage)
  }, [localStorage])
  

  return(
    <div>
      {token
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
          <NavLink to="/login">Volunteer</NavLink>
        </li>
        <li>
          <NavLink to="/org_login">Organization</NavLink>
        </li>
      </ul>}
    </div>
  )
};

export default NavBar;