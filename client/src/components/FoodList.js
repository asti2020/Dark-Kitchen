import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({foods}) => {
    return (
        <div>

                <ul>{
                    foods.map
                    (food => {
                        return <FoodCard key={food.id} food={food}/>
                    })
                }
                </ul>
            </div>
    )
}
