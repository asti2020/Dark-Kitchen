import React from 'react'
import {Delete} from './Delete'

export const FoodCard = ({food, user}) => {
    return (
        <>
                <div className='gridFoodItems'>
                    <img className='foodImage' src={'https://nativefoods.com/wp-content/uploads/2021/06/footer-cta-module-1197x798.png'} alt={food.food_name} />
                    <h3>{food.food_name}</h3>
                    <p>{food.ingredient}</p>
                    <p>$:{food.price}</p>
                    {user.user_type === 'chef' ? <div>
                    <button>Edit</button>
                    <Delete food={food}/>
                    </div>
                    :
                    <button>Add to Cart</button>}
                </div>
        </>
    )
}

