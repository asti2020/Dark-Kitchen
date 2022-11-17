import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'
import NavList from './NavList'


function Home({user}) {
    const [foods, setFoods] = useState([])
    console.log(user)
        useEffect (() => {
            fetch("/products")
                .then(res => res.json())
                .then(res => setFoods(res))
        }, [])

        const newFood = (food) => {
            setFoods([...foods, food])
        }
        console.log(foods)
            return ( 
            <>
            <NavList />
                <div id='InsideFromHome'>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p> Here you can find the best food in the world </p>
                    <div id='gridContainer'>
                        <FoodList user={user} newFood={newFood} foods={foods}/>
                    </div>
                </div>
            </>
            )
}

export default Home

