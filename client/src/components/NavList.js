import React from 'react'
//import {useState} from 'react'
import {FoodContainer} from './FoodContainer'
import Search from './Search'
import FoodList from './FoodList'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import {useState, useEffect} from 'react'




function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")
  // console.log(user)
      useEffect (() => {
          fetch("/products")
              .then(res => res.json())
              .then(res => setFoods(res))
      }, [])

      const newFood = (food) => {
          setFoods([...foods, food])
      }

  const filteredFoods = foods.filter(food => food.food_name.toLowerCase().includes(search.toLowerCase()))
        console.log(foods)

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
        <div id='gridContainer'>
                        <Search  setSearch={setSearch}/>
                        {/* <FoodList user={user} newFood={newFood} foods={filteredFoods}/> */}
                    </div>
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