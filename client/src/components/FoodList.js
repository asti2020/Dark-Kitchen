import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({foods ,onDeleteProduct, onUpdatedProduct, onClick, user, newFood}) => {
    return (
        <>
            {
                foods.map(food => {
                    return <FoodCard key={food.id} food={food} user={user} />
                })
            }
        </>
    )
}
