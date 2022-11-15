import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({foods,onDeleteProduct, onUpdatedProduct, newFood, user}) => {
    return (
        <div>

                <ul>
                {
                    foods.map
                    (food => {
                        return <FoodCard onUpdatedProduct={onUpdatedProduct} onDeleteProduct={onDeleteProduct} key={food.id} food={food} user={user}/>
                    })
                }
                </ul>
            </div>
    )
}
