import React from 'react'
//import {useState} from 'react'
import { NavLink } from 'react-router-dom'



function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  return (
    <nav id='navBar'>
      <ul>
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
      </ul>
    </nav>
  );
}

export default NavList;