import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'

function Home({user, onClick}) {
    const [foods, setFoods] = useState([])

    // console.log(user)
        useEffect (() => {
            fetch("/products")
                .then(res => res.json())
                .then(res => setFoods(res))
        }, [])
        console.log(foods, user)
        return ( 
            <>
                <div>
                    <h1>Logo</h1>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p> Here you can find the best food in the world </p>
                </div>
                <div>
                    <FoodList onClick={onClick} user={user} foods={foods}/>
                </div>
            </>
        )
}

export default Home

