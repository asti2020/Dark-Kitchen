import React from 'react'
import {FoodList} from './FoodList'
import {useState, useEffect} from 'react'

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
                </div>

                <div>
                    <FoodList foods={foods}/>
                    </div>
            </>
            )
}

export default Home

