import React from 'react'
import { Card } from 'react-bootstrap'
import {Delete} from './Delete'
import { useNavigate } from 'react-router-dom'

export const FoodCard = ({food, user, onUpdatedProduct, onDeleteProduct, onClick}) => {
    const navigate = useNavigate()
    const jwt_token = localStorage.getItem("jwt");

const onAddToCart = (e) => {
    e.preventDefault()
    console.log("add to cart")
    fetch('/cart_items',{
        method: 'POST',
        headers:{
            Authorization: "Bearer " + jwt_token,
            'Accept': 'application/json'
        }, body: JSON.stringify({
            product_id: food.product_id,
            quantity: 1
        })

    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
        onClick()
}

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
                    <button onClick={onAddToCart} className="btn btn-primary">Add to Cart</button>}
                </Card>
            </div>
        </div>
    )
}

