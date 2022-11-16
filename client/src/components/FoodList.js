import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({foods,onDeleteProduct, onUpdatedProduct, onClick, user}) => {
    return (
        <div>

                <ul className='foodListing'>
                {
                    foods.map
                    (food => {
                        return <FoodCard onClick={onClick} onUpdatedProduct={onUpdatedProduct} onDeleteProduct={onDeleteProduct} key={food.id} food={food} user={user}/>
                    })
                }
                </ul>
            </div>
    )
}
