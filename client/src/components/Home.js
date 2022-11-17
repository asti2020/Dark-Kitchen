import React from 'react'
import FoodList from './FoodList'
import {FoodContainer} from './FoodContainer'
// import Search from './Search'


import {useState, useEffect} from 'react'
import NavList from './NavList'


function Home({user}) {
    const [foods, setFoods] = useState([])
    // const [search, setSearch] = useState("")
    console.log(user)
        useEffect (() => {
            fetch("/products")
                .then(res => res.json())
                .then(res => setFoods(res))
        }, [])

        const newFood = (food) => {
            setFoods([...foods, food])
        }

        // const filteredFoods = foods.filter(food => food.food_name.toLowerCase().includes(search.toLowerCase()))
        // console.log(foods)
            return ( 
            <>
            <NavList />
                <div id='InsideFromHome'>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p>Here you can find the best food in the world</p>
                    <div id='gridContainer'>
                        <FoodList user={user} newFood={newFood} foods={foods}/>
                    </div> 
                    {/* <div id='gridContainer'>
                        <Search  setSearch={setSearch}/>
                        <FoodList user={user} newFood={newFood} foods={filteredFoods}/>
                    </div>  */}
                </div>
            </>
            )
}

export default Home

