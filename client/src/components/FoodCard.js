import React from 'react'
import { Card } from 'react-bootstrap'
import {Delete} from './Delete'
import { useNavigate } from 'react-router-dom'

export const FoodCard = ({food, user, onUpdatedProduct, onDeleteProduct, onClick}) => {
    const navigate = useNavigate()

    // const onAddToCart = () => {
    //     onUpdatedProduct(food.id)
    //     onClick()

    // }
            // const onRemoveFromCart = () => {
            //     onDeleteProduct(food.id)
            //     onClick()

            // }

            const onClickEdit = () =>{
                navigate('/edit')

            }



    return (
        <div>
            
            <div className="food-card">
                <Card>
                    <img className='foodImage' src={food.picture} alt={food.food_name} />
                    <h3>{food.food_name}</h3>
                    <p>Ingre:{food.ingredient}</p>
                    <p>$:{food.price}</p>
                    {user.user_type === 'chef' ? <div>
                    <button onClick={onClickEdit} className="btn btn-primary">Edit</button> 
                    <Delete onDeleteProduct={onDeleteProduct} user={user} food={food}/>
                    </div>
                    : 
                    <button onClick={onClick} className="btn btn-primary">Add to Cart</button>}
                </Card>
            </div>
        </div>
    )
}

