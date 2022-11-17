import React from 'react'
//import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { BsCart3 } from "react-icons/bs"



function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  return (
    <nav id='navBar'>
      <ul>
        <li>
          <img id='logo' src={logo} alt='logo' />
        </li>
        <li>
          <NavLink to="/profile">
            Add more food dishes
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="Cart">
            <><BsCart3/></>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;