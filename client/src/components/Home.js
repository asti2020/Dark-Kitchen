import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'
import { ChefProfile } from './ChefProfile'


function Home() {
    const [foods, setFoods] = useState([])


        useEffect (() => {
            fetch("/products")
                .then(res => res.json())
                .then(res => setFoods(res))
        }, [])
        console.log(foods)
            return ( 
            <>
                <div>
                    <h1>Logo</h1>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p> Here you can find the best food in the world </p>
                </div>
                <div>
                    <FoodList foods={foods}/>
                    <ChefProfile />
                    </div>
            </>
            )
}

export default Home

