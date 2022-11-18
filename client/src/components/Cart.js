import React, { useEffect, useState } from 'react'
import CartData from './CartData';

function Cart({user, count, foods}) {
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
    console.log(foods)
    console.log(cartDt[0]?.products )
    // console.log(cartDt.foods)
        if (user.user_type === 'order') {
            return (
            <div> 
                <h4> Hello {user.full_name}</h4>
                <CartData foods={cartDt[0]?.products} count={count} />
            </div>)
        } else {
            return (
            <div>
                {/* {console.log(cartDt.foods)} */}
                <h4> Hello {user.full_name}</h4>
                <h3> There is no food request for you!</h3> 
            </div>)
    }
}
export default Cart;
