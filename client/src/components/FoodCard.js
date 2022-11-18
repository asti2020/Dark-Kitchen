import React from 'react'
import { Card } from 'react-bootstrap'
import {Delete} from './Delete'
import { useNavigate } from 'react-router-dom'

export const FoodCard = ({food, user, onUpdatedProduct, onDeleteProduct, onClick}) => {
    const navigate = useNavigate()

    const onAddToCart = () => {
        onUpdatedProduct(food.id)
        onClick()

    }
            const onRemoveFromCart = () => {
                onDeleteProduct(food.id)
                onClick()

            }

            const onClickEdit = () =>{
                navigate('/edit')

            }



    return (
        <>
            <div className='gridFoodItems'>
                <div className='imageContainer'>
                    <img className='foodImage' src={food.picture} alt={food.name}/>
                </div>
                <h3 className='foodHeader'>{food.food_name}</h3>
                <p className='foodInfo'>{food.ingredient}</p>
                <p className='foodPrice'>$:{food.price}</p>
                {user.user_type === 'chef' ?
                    <div>
                        <button>Edit</button>
                        <Delete food={food}/>
                    </div>
                    :
                    <button>Add to cart</button>
                }
            </div>
        </>
    )
}

