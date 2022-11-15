import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({foods, newFood, user}) => {
    return (
        <div>

                <ul>
                {
                    foods.map
                    (food => {
                        return <FoodCard key={food.id} food={food} user={user}/>
                    })
                }
                </ul>
            </div>
    )
}
