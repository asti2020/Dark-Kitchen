import React from 'react'
import {Delete} from './Delete'

export const FoodCard = ({food, user}) => {
    return (
        <>
            <div className="food-card">
                <div>
                    <img className='foodImage' src={food.picture} alt={food.food_name} />
                    <h3>{food.food_name}</h3>
                    <p>Ingre:{food.ingredient}</p>
                    <p>$:{food.price}</p>
                    {user.user_type === 'chef' ? <div>
                    <button className="btn btn-primary">Edit</button>
                    <Delete food={food}/>
                    </div>
                    :
                    <button className="btn btn-primary">Add to Cart</button>}
                </div>
            </div>
        </>
    )
}

