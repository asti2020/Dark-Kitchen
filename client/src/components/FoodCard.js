import React from 'react'

export const FoodCard = ({food, user}) => {
    return (
        <div>
            
            <div className="food-card">
                <div>
                    <img className='foodImage' src={food.picture} alt={food.food_name} />
                    <h3>{food.food_name}</h3>
                    <p>Ingre:{food.ingredient}</p>
                    <p>$:{food.price}</p>
                    {user === 'chef' ? <button className="btn btn-primary">Edit</button> : <button className="btn btn-primary">Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}

