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

        const onDeleteProduct = (food) => {
            const newFoods = foods.filter(f => f.id !== food.id)
            setFoods(newFoods)
        }

        const onUpdatedProduct = (food) => {
            const newFoods = foods.map(f => f.id === food.id? food : f)
            setFoods(newFoods)
            console.log(newFoods)
        }

        
        console.log(foods)
            return ( 
            <>
                <div>
                    <h1>Logo</h1>
                    <p>Welcome to the Dark Kitchen!</p>
                    <p> Here you can find the best food in the world </p>
                </div>
                <div>
                    <FoodList user={user} onUpdatedProduct={onUpdatedProduct} onDeleteProduct={onDeleteProduct} foods={foods}/>
                    </div>
            </>
            )
}

export default Home

