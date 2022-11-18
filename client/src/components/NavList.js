import React from 'react'
//import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import {BiLogOut} from "react-icons/bi"
import {BiCart} from "react-icons/bi"
import {BiAddToQueue} from "react-icons/bi"
import logo from '../images/logo.png'

function NavList({count}) {
  return (
          <div id='navBar'>
            <div id='leftNav'>
              <NavLink to='/home'>
                <img id='logo' src={logo} alt='logo'/>
              </NavLink>
            </div>
            <div id='rightNav'>
              <NavLink  to='/profile'><BiAddToQueue className='iconsNavBar'></BiAddToQueue></NavLink>
              <NavLink  to="/cart"><BiCart className='iconsNavBar'>{count}</BiCart></NavLink>
              <NavLink  to='/'><BiLogOut className='iconsNavBar'></BiLogOut></NavLink>
            </div>
          </div>
    );
}

export default NavList;