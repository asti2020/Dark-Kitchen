import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'


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
                <div id='InsideFromHome'>
                    <h1>Logo</h1>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p> Here you can find the best food in the world </p>
                </div>
                <div>
                    <FoodList user={user} newFood={newFood} foods={foods}/>
                    </div>
            </>
            )
}

export default Home

