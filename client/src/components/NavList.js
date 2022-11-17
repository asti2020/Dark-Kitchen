import React from 'react'
//import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs"
import logo from '../images/logo.png'

function NavList({count}) {
  return (
              <nav>
                <ul>
                  <li>
                    <img id='logo' src={logo} alt='logo'/>
                  </li>
                    <li>
                      <NavLink to="/home" >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile" >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>
                        Add more dishes!
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">
                        <BsCart3>{count}</BsCart3>
                      </NavLink>
                    </li>
                </ul>
              </nav>
    );
}

export default NavList;