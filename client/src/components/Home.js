import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'
import NavList from './NavList'

function Home({user, onClick}) {
    const [foods, setFoods] = useState([])

    console.log(user)
        useEffect (() => {
            fetch("/products")
                .then(res => res.json())
                .then(res => setFoods(res))
        }, [])

        // const onDeleteProduct = (food) => {
        //     const newFoods = foods.filter(f => f.id !== food.id)
        //     setFoods(newFoods)
        // }

        // const onUpdatedProduct = (food) => {
        //     const newFoods = foods.map(f => f.id === food.id? food : f)
        //     setFoods(newFoods)
        //     console.log(newFoods)
        // }

        // const newFood =(food) => {
        //     const newFoods = [...foods, food]
        //     setFoods(newFoods)

        // }

        
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

