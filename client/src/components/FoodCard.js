import React from 'react'

export const FoodCard = ({food}) => {
    return (
        <div>
            
            <div className="food-card">
                <div>
                    <img className='foodImage' src={food.picture} alt={food.food_name} />
                    <h3>{food.food_name}</h3>
                    <p>Ingre:{food.ingredient}</p>
                    <p>$:{food.price}</p>
                </div>
            </div>
        </div>
    )
}

