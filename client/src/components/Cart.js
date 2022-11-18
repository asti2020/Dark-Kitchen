import React, { useEffect, useState } from 'react'
import CartData from './CartData';

function Cart({user, count}) {
    const jwt_token = localStorage.getItem("jwt");
    const [cartDt, setCartDt] = useState([])
    useEffect(() => {
        fetch('/carts',{
            method: 'GET',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCartDt(res)
                console.log(res)
            })
            console.log(cartDt)
    }, 
    [])
    console.log(cartDt.concat(cartDt.map(cart => cart.products)))
    return (
        <div>
            <h3>Hello {user.full_name}</h3>
            <CartData count={count} />
            
        </div>
    )
}
export default Cart;
