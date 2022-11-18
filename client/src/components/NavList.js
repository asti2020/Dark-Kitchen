import React from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs"


function NavList({count}) {
  return (
    <>
      <div className='navListhead'>
        <NavLink to="/"><div className="logo"> <img src="" alt="logo" /></div></NavLink>
              <nav>
                <ul className='nabBar'>
                    <li>
                      <NavLink to="Home" >
                        <Button> Home </Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="Profile" >
                        <Button>Profile</Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="Cart">
                        <Button>{count}<BsCart3/></Button>
                      </NavLink>
                    </li>
                    <li>

                      <NavLink to="logout">
                        <Button>Logout</Button>
                      </NavLink>
                      </li>
                      
                    <li>
                      <NavLink to="login">
                        <Button>Login</Button>
                      </NavLink>
                    </li>
                </ul>
              </nav>
        </div>

      </>
    );
}

export default NavList;