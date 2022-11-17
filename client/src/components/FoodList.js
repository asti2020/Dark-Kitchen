import React from 'react'
import { FoodCard } from './FoodCard'

function FoodList({foods, user}) {
    return (
                <ul>{
                    foods.map
                    (food => {
                        return <FoodCard key={food.id} food={food} user={user}/>
                    })
                }
                </ul>
    )
}

export default FoodList;
